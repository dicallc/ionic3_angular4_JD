import {Injectable} from '@angular/core';
import {Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {GOODLIST_URL} from "./Constants";
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';;
@Injectable()
export class GoodsService {

  constructor(public http: Http) {
    console.log('Hello GoodsService Provider');
  }

  public getGoodLists(): Observable<string> {
    return this.http.get(GOODLIST_URL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private  extractData(res: Response) {
    let body = res.json().data;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
