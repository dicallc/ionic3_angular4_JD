import { Injectable } from '@angular/core';
import { Http, Response ,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Utils} from "./Utils";
@Injectable()
export class HttpUtils {

  constructor(public http: Http) {
    console.log('Hello HomeService Provider');
  }
  public get(url: string, paramMap?: any): Observable<Response> {
    return this.http.get(url, new RequestOptions({
      search: HttpUtils.buildURLSearchParams(paramMap)

    }));
  }
  public static buildURLSearchParams(paramMap): URLSearchParams {
    let params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (let key in paramMap) {
      let val = paramMap[key];
      if (val instanceof Date) {
        val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
      }
      params.set(key, val);
    }
    return params;
  }
  // getGoods(url: string): Observable<string[]> {
  //   return this.http.get(url)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }
  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body || { };
  // }
  // private handleError (error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

}
