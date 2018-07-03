import { Component, OnInit } from '@angular/core';
import {AppService} from '../shared/app.service';
import {AppConstants, AppUrls} from '../shared/app.constants';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    public toggle: any = {address: true, payment: false};
    public shipping_address: any = [];
    public bookParams: any = {};
    public bookData: any = {};
    public myShippingAddress: any = {};
    public selectedShipping: any;
    public user: any = {};
    public totalPrice: any = 0;
    public membership: any = {};
    constructor(private appService: AppService,
                private appUrls: AppUrls,
                private activatedRoute: ActivatedRoute,
                public appConstants: AppConstants,
                private authService: AuthService,
                private router: Router) {
        this.activatedRoute.queryParams.subscribe((params) => {
            console.log('my checkout params are: ', params);
            this.bookParams = params;
        });
    }
    getTotalPrice(book) {
        const bPrice = (this.bookParams['book_type'] === 'ecopy') ? book['ecopy_price'] : book['hcopy_price'];
        book.book_price = Number((( bPrice / 100) * this.appConstants['lease_rate']).toFixed(2));
        return book.book_price;
    }
    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            // get user details from cast
            this.appService.userCast.subscribe((user) => {
                console.log('My User info ---- ', user);
                this.user = user;
                this.shipping_address = user['shipping_address'];
                if (this.shipping_address) {
                    this.shipping_address.forEach((address, index) => {
                        if (address['default']) {
                            this.myShippingAddress = address;
                            this.selectedShipping = index;
                        }
                    });
                }
            });
            // Call membership function
            this.getMembership();

            // Get the Book details from the server
            this.appService.get(this.appUrls.books_list + '/' + this.bookParams['_id'])
                .then((bookData: any) => {
                    this.bookData = bookData;
                    this.totalPrice = this.getTotalPrice(this.bookData);
                });
        }
    }
    // Get the membership details
    getMembership() {
        const where = {user_id: this.user['_id']};
        this.appService.get(this.appUrls.membership, {where: where})
            .then((data) => {
                console.log('Membership data ------------', data);
                if (data && data['_items'].length > 0) {
                    this.membership = data['_items'][0];
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    orderNow () {
        if (Object.keys(this.myShippingAddress).length <= 0) {
            this.appService.toast('Please select the Shipping Address', '', 'e');
        }
        const deductionAmount = this.totalPrice + this.appConstants.del_charges;
        const myTransaction = {
            user_id: this.user['_id'],
            amount: deductionAmount,
            transaction_type: 'debit',
            transaction_for: 'Books rental',
            status: 'success',
            txnid: Math.floor(Math.random() * 1000000000).toString(),
            product_info: 'Reading fee - ' + this.bookData['book_title']
        };
        this.appService.post(this.appUrls.transactions, myTransaction).then((sTrans) => {
            console.log('Success transaction ', sTrans);
            return sTrans;
        }).then((transaction) => {
            // Place order after successful Posted to transactions!
            const todayDate = new Date();
            delete this.myShippingAddress['default'];
            const order_object = {
                rent_fee: this.totalPrice,
                delivery_fee: this.appConstants.del_charges,
                book_id: this.bookData['_id'],
                requested_for: this.bookParams['book_type'],
                return_summary: {
                    return_date: new Date(todayDate.setMonth(todayDate.getMonth() + 1)).toISOString(),
                    return_notes: '',
                    is_returned: false
                },
                renewal_summary: [],
                user_id: this.user['_id'],
                shipping_address: this.myShippingAddress,
                delivery_date: new Date(todayDate.setDate(todayDate.getDate() + 2)).toISOString(),
                delivery_status: 'progress',
                transaction_id: transaction['_id']
            };
            this.appService.post(this.appUrls.orders, order_object).then((orderSuccess) => {
                console.log(orderSuccess);
                this.appService.toast('Order Placed successfully!',
                    'Rs ' + deductionAmount + ' deducted from your Account Balance!', 's');
                const copies: any = this.bookData['no_of_copies'];
                const updatedCopies: any = {
                    instore: copies['instore'] - 1,
                    outstore: copies['outstore'] + 1
                };
                // Call the Books API
                const _bUrl = this.appUrls.books_list + '/' + this.bookData['_id'];
                this.appService.patch(_bUrl, {no_of_copies: updatedCopies});
                // Update the deduction amount in Membership Document
                const amount = {account_balance: this.membership['amount']['account_balance'] - deductionAmount},
                    _mURL = this.appUrls.membership + '/' + this.membership['_id'];
                this.appService.patch(_mURL, {amount: amount})
                    .then((mData) => {
                        console.log('Membership Account balance updated Successfully!', amount);
                        this.appService.updateCart([]);
                        this.router.navigate(['/order-details', orderSuccess._id]);
                    })
                    .catch((mError) => {
                        console.log(mError);
                    });
            }).catch((orderErr) => {
                console.log(orderErr);
            });
        });
    }
}
