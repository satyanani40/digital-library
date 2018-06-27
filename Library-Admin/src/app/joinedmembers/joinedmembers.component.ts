import { Component, OnInit } from '@angular/core';
import {AppServiceModule} from '../shared/app.service.module';
import {ActivatedRoute, Router} from '@angular/router';
import {AppUrls} from '../config/constant.config';

@Component({
  selector: 'app-joinedmembers',
  templateUrl: './joinedmembers.component.html',
  styleUrls: ['./joinedmembers.component.css']
})
export class JoinedmembersComponent implements OnInit {
  public usersMeta: any = {};
  public persons: any = [];
  public filter: any = {search: ''};
  public status: any = [{text: 'Active', value: 'active'}, {text: 'InActive', value: 'inactive'}];
  public query: any = {sort: '-_created', max_results: 15, page: 1, status: 'active'};
  constructor(private appService: AppServiceModule,
              private appUrls: AppUrls,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.appUrls.loadingIcon = true;
      if (Object.keys(params).length <= 0) {
        this.router.navigate(['/joined-members'], {queryParams: this.query});
      } else {
        this.query = Object.assign({}, params);
        this.query['where'] = {status: params['status']};
      }
      this.getMembers();
    });
  }
  stopLoading () {
    setTimeout(() => {
      this.appUrls.loadingIcon = false;
    }, 500);
  }
  pagination(page) {
    this.query['page'] = page;
    delete this.query['where'];
    this.router.navigate(['/joined-members'], {queryParams: this.query});
  }
  toggleStatus () {
    this.pagination(Number(this.query['page']));
  }
  ngOnInit () {}
  getMembers() {
    this.persons = [];
    this.appService.get(this.appUrls.users, this.query).subscribe((data) => {
      console.log(data);
      this.usersMeta = data['_meta'];
      this.persons = data['_items'];
      this.stopLoading();
    }, (err) => {
      this.stopLoading();
    });
  }
}
