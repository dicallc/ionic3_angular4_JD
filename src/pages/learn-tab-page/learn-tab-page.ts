import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabHomePage} from "./tab-home-page/tab-home-page";
import {TabDiscoverPage} from "./tab-discover-page/tab-discover-page";
import {TabBroadcastPage} from "./tab-look-page/tab-look-page";
import {TabMessagesPage} from "./tab-shopcart-page/tab-shopcart-page";
import {TabMorePagePage} from "./tab-my-page-page/tab-my-page-page";
import { Deeplinks } from '@ionic-native/deeplinks';


@IonicPage()
@Component({
  selector: 'page-learn-tab-page',
  templateUrl: 'learn-tab-page.html',
})
export class LearnTabPage {
  tab1Root: any = TabHomePage;
  tab2Root: any = TabDiscoverPage;
  tab3Root: any = TabBroadcastPage;
  tab4Root: any = TabMessagesPage;
  tab5Root: any = TabMorePagePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
  }

}
