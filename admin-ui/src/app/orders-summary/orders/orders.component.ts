import {Component, OnInit, TemplateRef} from '@angular/core';
import {AppServiceModule} from '../../shared/app.service.module';
import {ActivatedRoute, Router} from '@angular/router';
import {AppUrls} from '../../config/constant.config';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public embedded: any = {'user_id': 1, 'book_id': 1};
  public query: any = {
    sort: '-_created', page: 1, max_results: 15,
    embedded: JSON.stringify(this.embedded)
  };
  modalRef: BsModalRef;
  modalItem: any;
  public orders: any = [];
  public _meta: any = {};
  public checkAddress: any = {};
  constructor(public appService: AppServiceModule,
              private router: Router,
              public appUrls: AppUrls,
              private activatedRoute: ActivatedRoute,
              private modalService: BsModalService) {
    this.activatedRoute.queryParams.subscribe((parameters: any) => {
      const where = {}, params = parameters;
      console.log(params);
      if (Object.keys(parameters).length === 0) {
        this.router.navigate(['/orders-summary/all-orders'], {queryParams: this.query});
      } else {
        this.query = Object.assign({}, params);
        this.getOrders();
      }
    });
  }
  ngOnInit() {}
  parseTitle(title) {
    return title.replace(/\//g, '').replace(/ /g, '-');
  }
  openModal(template: TemplateRef<any>, item) {
    this.modalRef = this.modalService.show(template);
    this.modalItem = item;
  }
  stopLoading () {
    setTimeout(() => {
      this.appUrls.loadingIcon = false;
    }, 500);
  }
  changeParams(filter) {
    console.log(this.query, '-------', filter);
    this.router.navigate(['/orders'], {queryParams: this.query});
  }
  showAddress(address) {
    this.checkAddress = address;
  }
  getOrders() {
    this.appUrls.loadingIcon = true;
    this.appService.get(this.appUrls.orders, this.query).subscribe((data: any) => {
      console.log(data);
      const items = data['_items'];
      if (items.length) {
        items.forEach( (item) => {
          console.log(item);
          const rSummary = item['return_summary'];
          if (rSummary) {
            if (rSummary['is_returned']) {
              item['rStatusClass'] = 'green';
            }
          }
          this.orders.push(item);
        });
      }
      this._meta = data['_meta'];
      this.stopLoading();
    }, (err: any) => {
      console.log(err);
      this.stopLoading();
    });
  }
  updateOrder(order) {
    console.log(order);
    const object = {notes: order['notes'], delivery_status: order['delivery_status']};
    this.appService.update(this.appUrls.orders + '/' + order['_id'], object)
      .subscribe((data) => {
        this.appService.toast(order['_id'], 'Successfully Updated!', 's');
        this.modalRef.hide();
      }, (err) => {
        console.log(err);
      });
  }
}
