import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GoodsService} from "../../../providers/goods-service";
import {GoodDetailPage} from "../good-detail-page/good-detail-page";


@Component({
  selector: 'page-good-lists-page',
  templateUrl: 'good-lists-page.html',
})
export class GoodListsPage {
  index;

  obj_goodsListData = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public goodsService: GoodsService) {
  }

  goods: any;
  errorMessage: string;

  ionViewDidLoad() {

    this.index = this.navParams.get('item');
    console.log('index' + this.index);
    this.loadData();

  }

  private loadNetData(refresher: any) {
    this.goodsService.getGoodLists().subscribe(

      countries => this.obj_goodsListData = <any>countries,
      error => this.errorMessage = <any>error,
      function complete() {
        refresher.complete();
      },
    );
  }
  private loadData() {
    this.goodsService.getGoodLists().subscribe(

      countries => this.obj_goodsListData = <any>countries,
      error => this.errorMessage = <any>error,
    );
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      infiniteScroll.complete();
    }, 500);
  }
  doRefresh(refresher) {
    this.loadNetData(refresher);
  }

  goBack() {
    this.navCtrl.pop();
  }
  startPage(index: number) {
    this.navCtrl.push(GoodDetailPage, {
      item: index
    });
  }

}
