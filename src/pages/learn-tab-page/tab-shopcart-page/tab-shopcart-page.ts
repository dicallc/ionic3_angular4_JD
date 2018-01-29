import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LookService} from "../../../providers/look-service";
import {AlertController} from 'ionic-angular';
declare var window;
@Component({
  selector: 'page-tab-messages-page',
  templateUrl: 'tab-shopcart-page.html',
})
export class TabMessagesPage {
  shopcart;
  alias: string = '';
  msgList: Array<any> = [];

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public lookservice: LookService) {
    this.shopcart = [{
      shops: {
        shop_name: '小红书福利社',
        isSelect: false,
        id: '0',
        shop_type: '自营',
        allPrise: 4668,
        products: [
          {
            name: '资生堂防晒霜 60ml',
            price: 199,
            num: 2
          },
          {
            name: '兰蔻精华液 100ml',
            price: 854,
            num: 5
          }]
      }

    }];
  }

  ionViewDidLoad() {

  }
  initJPush() {
//启动极光推送
    if (window.plugins && 　window.plugins.jPushPlugin) {
      window.plugins.jPushPlugin.init();
      document.addEventListener("jpush.receiveNotification", () => {
        this.msgList.push({content:window.plugins.jPushPlugin.receiveNotification.alert})
      }, false);
    }
  }
  setAlias() {
//设置Alias
    if (this.alias && this.alias.trim() != '') {
      window.plugins.jPushPlugin.setAlias(this.alias);
    }else alert('Alias不能为空')
  }
  AddRemoveRecipeToFavorite(item, index) {
    console.log(index)
  }

  /**
   * 商品添加
   */
  addNum(index, item_index) {
    if (this.shopcart[index].shops.products[item_index].num == 0) return
    ++this.shopcart[index].shops.products[item_index].num;
    this.numAllPrice();
  }

  /**
   * 商品减少
   */
  reduceNum(index, item_index) {
    if (this.shopcart[index].shops.products[item_index].num == 0) return
    --this.shopcart[index].shops.products[item_index].num;
    this.numAllPrice();
  }

  /**
   * 计算所有商品价格
   */
  numAllPrice() {
    for (let i = 0; i < this.shopcart.length; i++) {
      let shops = this.shopcart[i].shops;
      let finalprise = 0;
      for (let j = 0; j < shops.products.length; j++) {
        finalprise += (shops.products[j].num * shops.products[j].price);
      }
      this.shopcart[i].shops.allPrise = finalprise;
    }
    console.log(this.shopcart[0].shops.allPrise);
  }

  deleteProduct(index, item_index) {
    this.showConfirm(index, item_index);
  }

  /**
   * 弹出提示
   */
  showConfirm(index, item_index) {
    let confirm = this.alertCtrl.create({
      title: '温馨提示',
      message: '是否要删除该商品?',
      buttons: [
        {
          text: '再看看',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '是的',
          handler: () => {
            this.shopcart[index].shops.products.splice(item_index, 1);
            this.numAllPrice();
          }
        }
      ]
    });
    confirm.present();
  }

}
