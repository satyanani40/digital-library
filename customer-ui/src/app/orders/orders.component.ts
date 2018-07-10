import { Component, OnInit } from '@angular/core';
import {AppService} from '../shared/app.service';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {AppUrls} from '../shared/app.constants';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    public orders: any = [];
    public user: any = {};
    constructor(public appService: AppService,
                public authService: AuthService,
                private router: Router,
                private appUrls: AppUrls) { }
    ngOnInit() {
        this.appService.userCast.subscribe((user) => {
            if (Object.keys(user).length > 0) {
                console.log(user);
                this.user = user;
                this.getOrders(user['_id']);
            }
        })
    }
    getOrders(user_id) {
        console.log(this.user);
        const query = {
            where: {user_id: user_id},
            sort: '-_created',
            embedded: {book_id: 1}
        };
        console.log(query, user_id);
        this.appService.get(this.appUrls.orders, query).then((data) => {
            this.orders = data['_items'];
            console.log('My orders ----- ', this.orders);
        }).catch((err) => {
            console.log(err);
        });
    }
    removeChars(url) {
        return url.replace(/\//g, '').replace(/ /g, '-');
    }
}
