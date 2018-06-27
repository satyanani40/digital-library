import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppServiceModule, AuthService} from '../shared/app.service.module';
import {AppUrls} from '../config/constant.config';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-updatepersons',
  templateUrl: './updatepersons.component.html',
  styleUrls: ['./updatepersons.component.css']
})
export class UpdatepersonsComponent implements OnInit {
  public myParams: any;
  public membership: any;
  public modalItem: any;
  public modalRef: BsModalRef;
  public myUser: any;
  public updateForm = new FormGroup({
    membership_type: new FormControl('', Validators.required),
    plan_balance: new FormControl(0, Validators.required),
    status: new FormControl(true, Validators.required),
    plan_expiry: new FormControl(null, Validators.required)
  });
  public rForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    mobile_number: new FormControl('', [Validators.required]),
    gender: new FormControl('male'),
    status: new FormControl('inactive'),
    city: new FormControl(''),
    user_level: new FormControl('user')
  });
  public myStatus: any = [
    {text: 'Active', value: true},
    {text: 'Inactive', value: false}
  ];
  constructor(private aRoute: ActivatedRoute,
              private appService: AppServiceModule,
              private authService: AuthService,
              private router: Router,
              private appUrls: AppUrls,
              private modalService: BsModalService) {
    this.aRoute.params.subscribe((params: any) => {
      console.log(params);
      this.myParams = params;
      this.getUser();
    });
  }
  openModal(template: TemplateRef<any>, item) {
    this.modalRef = this.modalService.show(template);
    this.modalItem = item;
    this.updateForm.patchValue(item);
  }
  ngOnInit() {}
  getUser() {
    const embedded = {embedded: {user_id: 1}};
    this.appService.get(this.appUrls.users + '/' + this.myParams['_id'], embedded).subscribe((data) => {
      this.myUser = data;
      this.rForm.patchValue(this.myUser);
      // Get the details of membership
      const where = {user_id: this.myUser['_id']};
      this.appService.get(this.appUrls.membership, {where: where})
        .subscribe((membership: any) => {
          if (membership && membership['_items'].length) {
            this.membership = membership._items[0];
            console.log(membership);
          }
        });
    }, (error) => {
      console.log(error);
    });
  }
  makeInactive(params) {
    this.myUser['status'] = (this.myUser['status'] === 'active') ? 'inactive' : 'active';
    this.appService.update(this.appUrls.users + '/' + this.myUser['_id'], {status: this.myUser['status']})
      .subscribe((data) => {
        const myStatus = (this.myUser['status'] === 'active') ? 'Active' : 'InActive';
        this.appService.toast(this.myUser['first_name'] + ' is now ' + myStatus, 'Success', 's');
      }, (error) => {
        this.appService.toast('Something went wrong!', 'Error', 'e');
      });
  }
  toggleMembership(params) {
    this.membership['status'] = !this.membership['status'];
    this.appService.update(this.appUrls.membership + '/' + this.membership['_id'], {status: this.membership['status']})
      .subscribe((data) => {
        const myStatus = (this.membership['status']) ? 'Activated' : 'Closed';
        this.appService.toast('Membership is now ' + myStatus, 'Success', 's');
      }, (error) => {
        this.appService.toast('Something went wrong!', 'Error', 'e');
      });
  }
  updatePersonDetails(personData) {
    delete personData['c_password'];
    this.appService.update(this.appUrls.users + '/' + this.myUser['_id'], personData)
      .subscribe((data) => {
        this.appService.toast(this.myUser['first_name'] + ' Updated', 'Success', 's');
      }, (error) => {
        this.appService.toast('Something went wrong!', 'Error', 'e');
      });
  }
}


