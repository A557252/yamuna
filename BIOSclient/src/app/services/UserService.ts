import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http , Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Constants } from '../utils/constants';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

    constructor(private _http: Http) {}

    private headers = new Headers({'Content-Type': 'application/json'});

    loginUser(user: User): Promise<any> {
        return this._http
      .post(Constants.URL.host_url + Constants.URL.login_url, JSON.stringify(user), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as any)
      .catch(this.handleError);
      }

      private handleError(error: any): Promise<any> {
        console.error('Error', error);
        return Promise.reject(error.message || error);
      }
}
