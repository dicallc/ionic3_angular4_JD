import {Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-good-detail-page',
  templateUrl: 'good-detail-page.html',
})
export class GoodDetailPage {
  obj_cartCount = {
    count: "0"
  }
  //通过后台获取到的商品详细信息
  obj_goodsInfo = {
    goodsId: "200067",
    description: "若昕 韩版睡衣女冬法兰绒家居服加厚珊瑚绒女人卡通甜美睡衣秋冬套装 66651K 女 M",
    prise: "66",
    picture: [],
    src: "",
    isFork: false,
    colorGroup: [{name: "红色", value: "red"}, {name: "蓝色", value: "blue"}],
    sizeGroup: [{name: "s", value: "s"}, {name: "m", value: "m"}, {name: "l", value: "l"}]
  };
  // 用户选择信息，进行维护
  obj_goodsDetailInfo = {
    goodsId: this.obj_goodsInfo.goodsId,
    isFork: this.obj_goodsInfo.isFork,
    description: this.obj_goodsInfo.description,
    src: this.obj_goodsInfo.src,
    prise: this.obj_goodsInfo.prise,
    color: "",
    size: "",
    number: 1
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodDetailPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

  // 数量加1
  jia1 = function () {
    this.obj_goodsDetailInfo.number++;
  }

  // 数量减1
  jian1 = function () {
    if (this.obj_goodsDetailInfo.number != 1) {
      this.obj_goodsDetailInfo.number--;
    }
  }
}
