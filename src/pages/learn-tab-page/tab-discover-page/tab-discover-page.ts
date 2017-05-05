import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GoodListsPage} from "../good-lists-page/good-lists-page";
/**
 * Generated class for the TabDiscoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tab-discover-page',
  templateUrl: 'tab-discover-page.html',
})
export class TabDiscoverPage {
  public categoryData = [];
  public categoryDetailData = [];
  public select=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.categoryData = this.getCategoryData();
    this.getCategoryDetailData(102);
  }

  private getCategoryDetailData(typeNumber: number) {
    if (typeNumber == 102) {
      this.categoryDetailData = [
        {
          name: "毛呢大衣",
          src: "assets/img/nz1.jpg",
          typeNumber: '10001'
        },
        {
          name: "羽绒服",
          src: "assets/img/nz2.jpg",
          typeNumber: '10002'
        },
        {
          name: "针织衫",
          src: "assets/img/nz3.jpg",
          typeNumber: '10003'
        },
        {
          name: "连衣裙",
          src: "assets/img/nz4.jpg",
          typeNumber: '10004'
        },
        {
          name: "棉服",
          src: "assets/img/nz5.jpg",
          typeNumber: '10005'
        },
        {
          name: "长袖T恤",
          src: "assets/img/nz6.jpg",
          typeNumber: '10006'
        },
        {
          name: "羊绒衫",
          src: "assets/img/nz7.jpg",
          typeNumber: '10007'
        },
        {
          name: "衬衫",
          src: "assets/img/nz8.jpg",
          typeNumber: '10008'
        },
        {
          name: "风衣",
          src: "assets/img/nz9.jpg",
          typeNumber: '10009'
        },
        {
          name: "皮衣",
          src: "assets/img/nz10.jpg",
          typeNumber: '10010'
        },
        {
          name: "休闲裤",
          src: "assets/img/nz11.jpg",
          typeNumber: '10011'
        },
        {
          name: "牛仔裤",
          src: "assets/img/nz12.jpg",
          typeNumber: '10012'
        }
      ];
    } else {
      this.categoryDetailData = [
        {
          name: "夹克",
          src: "assets/img/nanz1.jpg",
          typeNumber: '10013'
        },
        {
          name: "衬衫",
          src: "assets/img/nanz2.jpg",
          typeNumber: '10014'
        },
        {
          name: "牛仔裤",
          src: "assets/img/nanz3.jpg",
          typeNumber: '10015'
        },
        {
          name: "羽绒服",
          src: "assets/img/nanz4.jpg",
          typeNumber: '10016'
        },

        {
          name: "T恤",
          src: "assets/img/nanz5.jpg",
          typeNumber: '10017'
        },
        {
          name: "休闲裤",
          src: "assets/img/nanz6.jpg",
          typeNumber: '10018'
        },
        {
          name: "卫衣",
          src: "assets/img/nanz7.jpg",
          typeNumber: '10019'
        },
        {
          name: "针织衫",
          src: "assets/img/nanz8.jpg",
          typeNumber: '10020'
        },
        {
          name: "棉服",
          src: "assets/img/nanz9.jpg",
          typeNumber: '10021'
        }
      ];
    }
  }

  private getCategoryData() {
    return [
      {
        name: "潮流女装",
        typeNumber: '102'
        ,isSelect:true
      },
      {
        name: "品牌男装",
        typeNumber: '103'
        ,isSelect:false
      },
      {
        name: "热门推荐",
        typeNumber: '101'
        ,isSelect:false
      },
      {
        name: "内衣配饰",
        typeNumber: '104'
        ,isSelect:false
      },
      {
        name: "家用电器",
        typeNumber: '105'
        ,isSelect:false
      },
      {
        name: "电脑办公",
        typeNumber: '106'
        ,isSelect:false
      },
      {
        name: "手机数码",
        typeNumber: '107'
        ,isSelect:false
      },
      {
        name: "母婴频道",
        typeNumber: '108'
        ,isSelect:false
      },
      {
        name: "图书",
        typeNumber: '109'
        ,isSelect:false
      },
      {
        name: "家居家纺",
        typeNumber: '110'
        ,isSelect:false
      },
      {
        name: "居家生活",
        typeNumber: '111'
        ,isSelect:false
      },
      {
        name: "家具建材",
        typeNumber: '112'
        ,isSelect:false
      },
      {
        name: "热门推荐",
        typeNumber: '101' ,isSelect:false
      },
      {
        name: "居家生活",
        typeNumber: '101', isSelect: false
      }
    ];

  }

  categoryLeftClick=function(index: number){
    console.log("index"+index);

     this.categoryData[this.select].isSelect=false;
    let data= this.categoryData[index];
    data.isSelect=true;
    this.select=index;
  };

  startPage(index: number) {
    this.navCtrl.push(GoodListsPage, {
      item: index
    });
  }
  goBack(){
    console.log('goBack');
  }
}
