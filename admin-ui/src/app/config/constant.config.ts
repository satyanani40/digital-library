/* Application Constants */
import {environment} from "../../environments/environment";

// API End points
export class AppUrls {
  /*
  * REST URLS for checking
  * */
  public custUrl = environment.apiUrl + '/';
  public baseUrl = environment.apiUrl + '/api/1.0/';
  /*
  * PROD set up
  */
  /*public custUrl = '/';
  public baseUrl = '/api/1.0/';*/
  // REST End points
  public login = this.baseUrl + 'auth/login';
  public register = this.baseUrl + 'auth/signup';
  public me = this.baseUrl + 'auth/me';
  public logout = this.baseUrl + 'auth/logout';
  public confirmEmail = this.baseUrl + 'account/ConfirmEmailAndSetPassword';
  public resetPassword = this.baseUrl + 'reset';
  public sendForgotPasswordMail = this.baseUrl + 'Password/SendForgotPasswordMail';
  public books_list = this.baseUrl + 'books';
  public categories = this.baseUrl + 'categories';
  public membership = this.baseUrl + 'membership';
  public orders = this.baseUrl + 'orders';
  public authors = this.baseUrl + 'authors';
  public users = this.baseUrl + 'persons';
  public upload_file = this.baseUrl + 'upload-file';
  public loadingIcon = false;
}

