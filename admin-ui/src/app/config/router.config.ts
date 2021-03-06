import { Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {HomepageComponent} from '../homepage/homepage.component';
import {PublishBookComponent} from '../publish-book/publish-book.component';
import {MembershipComponent} from '../members-management/membership/membership.component';

import {AuthGuardService as AuthGaurd} from '../shared/app.service.module';
import {EditBookComponent} from '../edit-book/edit-book.component';
import {CategoriesComponent} from '../categories/categories.component';
import {OrdersComponent} from '../orders-summary/orders/orders.component';
import {ForgotpasswordComponent} from '../forgotpassword/forgotpassword.component';
import {UpdatepersonsComponent} from '../updatepersons/updatepersons.component';
import {JoinedmembersComponent} from '../members-management/joinedmembers/joinedmembers.component';
import {OrdersSummaryComponent} from "../orders-summary/orders-summary.component";
import {ReturnRequestsComponent} from "../orders-summary/return-requests/return-requests.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },
  { path: 'homepage', component: HomepageComponent, canActivate: [AuthGaurd] },
  { path: 'book-catelog', component: PublishBookComponent },
  { path: 'edit-book/:_id', component: EditBookComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'membership', component: MembershipComponent, canActivate: [AuthGaurd] },
  { path: 'joined-members', component: JoinedmembersComponent, canActivate: [AuthGaurd] },
  { path: 'update-person/:_id', component: UpdatepersonsComponent, canActivate: [AuthGaurd] },
  { path: 'orders-summary', component: OrdersSummaryComponent,
    children: [
      { path: 'all-orders', component: OrdersComponent },
      { path: 'return-requests', component: ReturnRequestsComponent }
    ]
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
