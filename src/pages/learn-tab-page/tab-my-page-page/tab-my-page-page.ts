import { Component ,ViewChild} from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabMorePagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tab-more-page-page',
  templateUrl: 'tab-my-page-page.html',
})
export class TabMorePagePage {
  @ViewChild('input_user_name') myInput ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.myInput.setFocus();
    },150);
    console.log('ionViewDidLoad TabMorePagePage');
  }

}
