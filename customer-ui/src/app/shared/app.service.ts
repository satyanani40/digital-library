import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AppUrls} from './app.constants';

@Injectable()
export class AppService {
    public options: any;
    public parseHeaders: any;
    private Cart = new BehaviorSubject<any>([]);
    private CurrentUser = new BehaviorSubject<any>({});
    cartCast = this.Cart.asObservable();
    userCast = this.CurrentUser.asObservable();
    constructor(private http: HttpClient,
                private Urls: AppUrls) {
        this.options = new HttpHeaders({'Content-Type': 'application/json'});
        this.parseHeaders = new HttpHeaders({
            'X-Parse-Application-Id': 'myAppId', 'X-Parse-REST-API-Key': 'hello_master',
            'Content-Type': 'application/json'
        });
    }
    // Get Method to get the Data from Server
    get(url?: string, parameters?: any): Promise<any> {
        let params: any;
        // Setup log namespace query parameter
        params = new HttpParams();
        params = params.set('rand', Math.random());
        if (parameters) {
            for (const key in parameters) {
                if (parameters.hasOwnProperty(key)) {
                    if (typeof parameters[key] === 'object') {
                        console.log(key, parameters[key]);
                        params = params.set(key, JSON.stringify(parameters[key]));
                    } else {
                        params = params.set(key, parameters[key]);
                    }
                }
            }
        }
        console.log('my params: ', params, parameters);
        return this.http.get(url, {params: params}).toPromise();
    }
    post(url: string, data: any, noHeaders?: any): Promise<any> {
        this.options = (noHeaders) ? new HttpHeaders({'Content-Type': undefined}) : this.options;
        return this.http.post(url, data, this.options).toPromise();
    }
    patch(url: string, data: any, params?: any): Promise<any> {
        return this.http.patch(url, data).toPromise();
    }
    delete(url: string): Promise<any> {
        return this.http.delete(url).toPromise();
    }
    /*
    * Toast messages function
    *
    * */
    toast(titleMessage, bodyMessage, toastType) {
        const x = document.getElementById('toast');
        x.className = (toastType === 's') ? 'show green' : 'show red';
        // set title
        const tTitle = document.getElementById('toast-title'),
            tBody = document.getElementById('toast-body');
        tTitle.innerText = titleMessage;
        tBody.innerText = bodyMessage;
        setTimeout(function(){ x.className = x.className.replace('show', ''); }, 5000);
    }
    errorHandling(err) {
        if (err['error'] && err['error']['_error']) {
            const er = err['error']['_error'];
            if (typeof er['message'] === 'object') {
                er['message'] = er['message']['message'];
            }
            this.toast(er['message'], 'Status code: ' + er['code'], 'e');
        }
    }
    dateFormat(date) {
        const dt = new Date(date);
        return dt.getFullYear() + '/' + dt.getMonth() + '/' + dt.getDate();
    }
    checkHttps(url) {
        const staticPath = this.Urls.staticPath,
            tarea_regex = /(http(s?))\:\/\//gi;
        if (!tarea_regex.test(url)) {
            url = staticPath + url;
        }
        return url;
    }
    updateCart(value) {
        this.Cart.next(value);
    }
    updateUser(value) {
        this.CurrentUser.next(value);
    }

    /*
    * --------------- PARSE API REQUESTS
    * */
    getParse(url, parameters?: any) {
        let params: any;
        // Setup log namespace query parameter
        params = new HttpParams();
        if (parameters) {
            for (const key in parameters) {
                if (parameters.hasOwnProperty(key)) {
                    if (typeof parameters[key] === 'object') {
                        params = params.set(key, JSON.stringify(parameters[key]));
                    } else {
                        params = params.set(key, parameters[key]);
                    }
                }
            }
        }
        return this.http.get(url, {headers: this.parseHeaders, params: params}).toPromise();
    }
    postParse(url, data) {
        return this.http.post(url, data, {headers: this.parseHeaders}).toPromise();
    }
    updateParse(url, data) {
        console.log('update Parse service called');
        return this.http.put(url, data, {headers: this.parseHeaders}).toPromise();
    }
    deleteParse(url) {
        return this.http.delete(url, {headers: this.parseHeaders}).toPromise();
    }
}
