/**
 * Created by Administrator on 2017/5/3 0003.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from "rxjs";
import {Utils} from "./Utils";
import {GlobalData} from "./GlobalData";

@Injectable()
export class HttpService {

  constructor(public http: Http, private globalData: GlobalData) {
  }

  public get(url: string, paramMap?: any): Observable<Response> {
    return this.http.get(url, new RequestOptions({
      search: HttpService.buildURLSearchParams(paramMap),
      headers: new Headers({
        'token': this.globalData.token
      })
    }));
  }

  // 默认Content-Type为application/json;
  public post(url: string, body: any = null, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.post(url, body, this.getOptions(options));
  }

  public postFormData(url: string, paramMap?: any): Observable<Response> {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Accept': 'application/json;charset=utf-8',
      'token': this.globalData.token
    });
    return this.http.post(url, HttpService.buildURLSearchParams(paramMap).toString(), new RequestOptions({headers: headers}));
  }

  public put(url: string, body: any = null, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.put(url, body, this.getOptions(options));
  }

  public delete(url: string, paramMap?: any): Observable<Response> {
    return this.http.delete(url, new RequestOptions({
      search: HttpService.buildURLSearchParams(paramMap),
      headers: new Headers({
        'token': this.globalData.token
      })
    }));
  }

  public patch(url: string, body: any = null, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.patch(url, body, this.getOptions(options));
  }

  public head(url: string, paramMap?: any): Observable<Response> {
    return this.http.head(url, new RequestOptions({
      search: HttpService.buildURLSearchParams(paramMap),
      headers: new Headers({
        'token': this.globalData.token
      })
    }));
  }

  public options(url: string, paramMap?: any): Observable<Response> {
    return this.http.options(url, new RequestOptions({
      search: HttpService.buildURLSearchParams(paramMap),
      headers: new Headers({
        'token': this.globalData.token
      })
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

  private getOptions(options): RequestOptionsArgs {
    if (!options) {
      options = new RequestOptions({
        headers: new Headers({
          'token': this.globalData.token
        })
      });
      return options;
    }
  }

}
