import {Component, OnInit, TemplateRef} from '@angular/core';
import {AppServiceModule} from '../../shared/app.service.module';
import {AppUrls} from '../../config/constant.config';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-persons',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  public _meta: any = {};
  public toDay: any = new Date().toISOString();
  public checkAddress: any = {};
  public membership: any = [];
  modalRef: BsModalRef;
  public membershipType = {
    '3': 'Economy reader',
    '6': 'Value reader',
    '9': 'Deluxe reader',
    '12': 'Ultimate reader'
  };
  public readingCalculation = {books: 3, months: 3, totalFee: 0};
  modalItem: any;
  public bstatus: any = [{text: 'Active', value: true}, {text: 'In Active', value: false}];
  public query: any = {sort: '-_created', max_results: 15, page: 1, membership_type: 'all'};
  public membershipTypes: any = ['Economy reader', 'Value reader', 'Deluxe reader', 'Ultimate reader'];
  constructor(private appService: AppServiceModule,
              private appUrls: AppUrls,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public modalService: BsModalService) {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (Object.keys(params).length <= 0) {
        this.router.navigate(['/membership'], {queryParams: this.query});
      } else {
        this.query = Object.assign({}, params);
        this.query['embedded'] = {user_id: 1};
        this.query['where'] = {status: this.query['status']};
        if (this.query['status'] === 'all') {
          delete this.query['where']['status'];
        } else {
          this.query['where']['status'] = params['status'] === 'true';
        }
        if (this.query['membership_type'] === 'all') {
          delete this.query['where']['membership_type'];
        } else {
          this.query['where']['membership_type'] = this.query['membership_type'];
        }
      }
      this.getMembers();
    });
  }
  openModal(template: TemplateRef<any>, item) {
    console.log(template, item);
    this.modalRef = this.modalService.show(template);
    this.modalItem = Object.assign({}, item);
    this.readingCalculation['books'] = this.modalItem['books_at_a_time'];
    this.readingCalculation['months'] = this.modalItem['no_of_months'];
    this.readingCalculation['totalFee'] = this.modalItem['amount']['plan_balance'];
  }
  getPriceDetails(calcData) {
    const month = Number(calcData['months']);
    const bCount = Number(calcData['books']);
    let tFee = 800;
    if (month === 3) {
      this.readingCalculation['totalFee'] = tFee + (180 * (bCount - 1));
    } else if (month === 6) {
      tFee = (tFee * 2) - ((tFee * 2) / 100) * 10;
      this.readingCalculation['totalFee'] = tFee + (324 * (bCount - 1));
    } else if (month === 9) {
      tFee = (tFee * 3) - ((tFee * 3) / 100) * 15;
      this.readingCalculation['totalFee'] = tFee + (468 * (bCount - 1));
    } else if (month === 12) {
      tFee = (tFee * 4) - ((tFee * 4) / 100) * 20;
      this.readingCalculation['totalFee'] = tFee + (576 * (bCount - 1));
    }
  }
  showAddress(address) {
    this.checkAddress = address;
  }
  stopLoading () {
    setTimeout(() => {
      this.appUrls.loadingIcon = false;
    }, 500);
  }
  pagination(page) {
    this.query['page'] = page;
    delete this.query['embedded'];
    delete this.query['where'];
    this.router.navigate(['/membership'], {queryParams: this.query});
  }
  toggleStatus () {
    this.pagination(Number(this.query['page']));
  }
  ngOnInit () {}
  getString(text) {
    return text.substr(0, 10) + '...';
  }
  sendReminder(remObject) {
    console.log(remObject);
  }
  requestMembership() {
    const date = new Date(),
      books = Number(this.readingCalculation['books']),
      months = Number(this.readingCalculation['months']);
    const plan_expiry = new Date(date.setMonth(date.getMonth() + months)).toISOString();
    const membership = {
      books_at_a_time: books,
      no_of_months: months,
      plan_expiry: plan_expiry,
      membership_type: this.membershipType[this.readingCalculation['books']],
      amount: {
        account_balance: this.modalItem['amount']['account_balance'],
        plan_balance: this.readingCalculation['totalFee']
      },
      new_member: false,
      status: this.modalItem['status'],
      membership_notes: this.modalItem['membership_notes']
    };
    console.log(membership);
    this.updateMembership(membership);
  }
  updateMembership(membership) {
    this.appService.update(this.appUrls.membership + '/' + this.modalItem['_id'], membership).subscribe((data) => {
      this.appService.toast(this.modalItem['_id'], 'Updated Successfully!', 's');
      this.modalRef.hide();
      this.getMembers();
    }, (error: any) => {
      this.appService.toast('Something went wrong!', 'Please check console!', 'e');
    });
  }
  getMembersByExpiration(value?: any) {
    let expiryDate: any = (value) ? new Date().setDate(new Date().getDate() + value) : new Date();
    const todayDate: any = new Date().toISOString();
    expiryDate = new Date(expiryDate).toISOString();
    if (value) {
      this.query['where']['plan_expiry'] = {'$lte': expiryDate, '$gte': this.toDay};
    } else {
      this.query['where']['plan_expiry'] = {'$lte': this.toDay};
    }
    this.getMembers();
  }
  statusToggle(status) {
    const membership = {status: status};
    this.updateMembership(membership);
  }
  getMembers(noQueries?: any) {
    if (noQueries) {
      delete this.query['embedded'];
      delete this.query['where']['plan_expiry'];
    }
    this.appUrls.loadingIcon = true;
    this.membership = [];
    this.appService.get(this.appUrls.membership, this.query).subscribe((data) => {
      console.log(data);
      this._meta = data['_meta'];
      this.membership = data['_items'];
      this.stopLoading();
    }, (err) => {
      this.stopLoading();
    });
  }
}
