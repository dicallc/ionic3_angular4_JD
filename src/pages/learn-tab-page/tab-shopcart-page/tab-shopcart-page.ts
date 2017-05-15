import {Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {LookService} from "../../../providers/look-service";
import {GOODLIST_head_URL} from "../../../providers/Constants";

/**
 * Generated class for the TabMessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tab-messages-page',
  templateUrl: 'tab-shopcart-page.html',
})
export class TabMessagesPage {
  obj_ShopCartRecommendData = [];
  private errorMessage: String;
  Image_head_Url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lookservice: LookService) {
    this.Image_head_Url=GOODLIST_head_URL;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabMessagesPage');
    this.lookservice.getGoodsList().subscribe(
      countries => this.obj_ShopCartRecommendData = <any>countries,
      error => this.errorMessage = <any>error,
      function complete() {

      },
    );
  }

}
