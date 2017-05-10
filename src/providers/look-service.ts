import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';;

/*
  Generated class for the LookService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LookService {
  data: string;
  constructor(public http: Http) {
    console.log('Hello LookService Provider');
  }
  public getAllcategory(): Observable<string> {
    return this.http.get("assets/json/allcategory.json")
      .map(res => res.json().content);
  }
  public getGoodsList(): Observable<string> {
    return this.http.get("assets/json/look_list.json")
      .map(res => res.json().content);
  }
  public getShopCartRecommendList(): Observable<string> {
    return this.http.get("assets/json/shopcart.json")
      .map(res => res.json().content);
  }


}
