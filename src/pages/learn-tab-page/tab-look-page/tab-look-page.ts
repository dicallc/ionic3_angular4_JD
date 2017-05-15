import {Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Slides} from 'ionic-angular';
import {LookService} from "../../../providers/look-service";
import {GOODLIST_head_URL} from "../../../providers/Constants";
@Component({
  selector: 'page-tab-broadcast-page',
  templateUrl: 'tab-look-page.html',
})
export class TabBroadcastPage {
  @ViewChild('mySlider') slider: Slides;
  tabToShow: Array<boolean> = [true, true, true, true, true, true, true, true, true];
  scrollableTabsopts: any = {};
  obj_CategorysListData = [];
  obj_GoodsListData = [];
  tabsPlacement: string = "top";
  errorMessage: string;
  Image_head_Url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lookservice: LookService) {
    this.Image_head_Url=GOODLIST_head_URL;
  }

  ionViewDidLoad() {
    this.lookservice.getAllcategory().subscribe(
      countries => this.obj_CategorysListData = <any>countries,
      error => this.errorMessage = <any>error,
      function complete() {
      },
    );
    this.lookservice.getGoodsList().subscribe(
      countries => this.obj_GoodsListData = <any>countries,
      error => this.errorMessage = <any>error,
      function complete() {
      },
    );
  }


  selectedFriends(index) {
    console.log("Segment changed to", index);
  }

}
