import { Injectable } from '@angular/core';
import { Http ,Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { constants} from '../Utils/constants';

@Injectable()
export class InquiryService {

    constructor(private _http:Http){};

    vinSearch(vinNumber) {
        return this._http.get(constants.URL.host_url + constants.URL.inquiry_url + vinNumber)
        .map((response : Response) => {
            var userResponse = response.json();
            return userResponse;
        })
        .catch(this._vinSearchErrorHandler);
    }   
    _vinSearchErrorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error || "server error");
    }

}