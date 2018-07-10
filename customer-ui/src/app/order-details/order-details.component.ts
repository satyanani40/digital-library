import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../shared/app.service';
import {AppUrls} from '../shared/app.constants';
import {HttpParams} from '@angular/common/http';

@Component({
    selector: 'app-order-success',
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
    urlParams: any = {};
    public myOrder: any = {};
    constructor(private activatedRoute: ActivatedRoute,
                public appService: AppService,
                private appUrls: AppUrls) {
        this.activatedRoute.params.subscribe((params) => {
            this.urlParams = params;
        });
    }
    ngOnInit() {
        this.getOrder();
        this.appService.updateCart([]);
    }
    getOrder() {
        const embedded = JSON.stringify({'book_id': 1});
        const query = '/' + this.urlParams['order_id'] + '?embedded=' + embedded;
        this.appService.get(this.appUrls.orders + query).then((data) => {
            console.log(data);
            this.myOrder = data;
        }).catch((err) => {
            console.log(err);
        });
    }
    returnRequest(obj) {
        console.log('Return request Object', obj);
        let myRequestSummary: any = {return_summary: obj['return_summary']};
        myRequestSummary.return_summary['requested_on'] = new Date().toISOString();
        myRequestSummary.return_summary['is_requested'] = true;
        myRequestSummary.return_summary['is_returned'] = false;
        myRequestSummary.return_summary['requested_notes'] = 'Return requested, will get in touch with you!';
        const _urL: any = this.appUrls.orders + '/' + obj['_id'];
        this.appService.patch(_urL, myRequestSummary)
            .then((success: any) => {
                this.myOrder['return_summary'] = myRequestSummary.return_summary;
                console.log(this.myOrder, success);
                this.appService.toast('Order: ' + obj['_id'], 'Return request placed Successfully!', 's');
            })
            .catch((error: any) => {
                console.log(error);
            });
    };


}
