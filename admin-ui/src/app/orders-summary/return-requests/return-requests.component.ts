import {Component, OnInit, TemplateRef} from '@angular/core';
import {AppUrls} from "../../config/constant.config";
import {ActivatedRoute, Router} from "@angular/router";
import {BsModalService} from "ngx-bootstrap";
import {AppServiceModule} from "../../shared/app.service.module";
import {BsModalRef} from "ngx-bootstrap/modal/bs-modal-ref.service";

@Component({
  selector: 'app-return-requests',
  templateUrl: './return-requests.component.html',
  styleUrls: ['./return-requests.component.css']
})
export class ReturnRequestsComponent implements OnInit {

  public embedded: any = {'user_id': 1, 'book_id': 1};
  public where: any = {'return_summary.is_requested': true};
  public query: any = {
    sort: 'return_summary.requested_on', page: 1, max_results: 15,
    embedded: JSON.stringify(this.embedded),
    where: JSON.stringify(this.where)
  };
  modalRef: BsModalRef;
  modalItem: any;
  public orders: any = [];
  public _meta: any = {};
  public checkAddress: any = {};
  constructor(private appService: AppServiceModule,
              private router: Router,
              public appUrls: AppUrls,
              private activatedRoute: ActivatedRoute,
              private modalService: BsModalService) {
    this.activatedRoute.queryParams.subscribe((parameters: any) => {
      if (Object.keys(parameters).length === 0) {
        this.router.navigate(['/orders-summary/return-requests'], {queryParams: this.query});
      } else {
        this.query = Object.assign({}, parameters);
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
    this.router.navigate(['/orders-summary/return-requests'], {queryParams: this.query});
  }
  showAddress(address) {
    this.checkAddress = address;
  }
  getOrders() {
    this.appUrls.loadingIcon = true;
    this.appService.get(this.appUrls.orders, this.query).subscribe((data: any) => {
      console.log(data);
      this.orders = data['_items'];
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
