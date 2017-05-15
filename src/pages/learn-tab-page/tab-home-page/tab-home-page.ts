import {Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import * as Swiper from 'swiper';
import * as $ from 'jquery';
@Component({
  selector: 'page-tab-home-page',
  templateUrl: 'tab-home-page.html',
})
export class TabHomePage {
  @ViewChild('lyScroll')
  lyScrollDiv: ElementRef;
  @ViewChild('headBgColor')
   greetBgDiv: ElementRef;
  @ViewChild('btnBackTop')
   bBackTop: ElementRef;

  oSwiper1: any = null;
  public headerSlideData = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public el: ElementRef) {
  }

  ionViewDidLoad() {
    this.initHeaderSlide();
    this.headerSlideData = this.getHeaderSlideData();
    this.headerChangeColor();
    this.goTop();
    this.initToutiaoSlide();
    this.countdown();
  }


  private countdown() {
   let timer;
   if(timer)
     clearInterval(timer);
    // 倒计时
    var timeObj={
      h:1,
      m:37,
      s:13
    };
    var timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
    var timeList=document.getElementsByClassName('time-text');
    for(var i=0;i<timeList.length;i++){
      timeList[i].innerHTML=timeStr[i];
    }
    function toDouble(num){
      if(num<10){
        return '0'+num;
      }else{
        return ''+num;
      }
    }
    timer=setInterval(function(){
      timeObj.s--;
      if(timeObj.s==-1){
        timeObj.m--;
        timeObj.s=59;
      }
      if(timeObj.m==-1){
        timeObj.h--;
        timeObj.m=59;
      }
      if(timeObj.h==-1){
        timeObj.h=0;
        timeObj.m=0;
        timeObj.s=0;
        clearInterval(timer);
      }
      timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
      for(var i=0;i<timeList.length;i++){
        timeList[i].innerHTML=timeStr[i];
      }
    },1000)

  }


  private goTop() {
    let lyBg=this.lyScrollDiv.nativeElement;
    let btTop=this.bBackTop.nativeElement;

    lyBg.addEventListener('scroll',function(){
      var top = btTop.scrollTop;
      if(top>500){
        console.dir("小雨200")
        btTop.style.opacity = 1;
      }else{
        console.dir("大雨200")
        btTop.style.opacity = 0;
      }
    },false);

    btTop.onclick = function(){
      lyBg.scrollTop = 0;
    }
  }

  private headerChangeColor() {
    //https://segmentfault.com/a/1190000008653690
    let headdiv = this.lyScrollDiv.nativeElement;
    var nowOpacity = 0;
    let lHeadBgdiv= this.greetBgDiv.nativeElement;
    headdiv.onscroll = function (event) {
      if (this.scrollTop / 250 < .85) {
        nowOpacity = this.scrollTop / 250;
      }
      lHeadBgdiv.style.opacity = nowOpacity;

    }
  }

  // 初始化京东头条滚动条
  private initToutiaoSlide() {
    new Swiper('#toutiaoSlider', {
      direction:'vertical',
      autoplay: 2000,
      loop: true
    });
  }
  // 初始化头部滚动条
  private initHeaderSlide() {
    this.oSwiper1 = new Swiper('.swiper-container', {
      slidesPerView: 1,
      paginationClickable: true,
      centeredSlides: true,
      autoplay: 2000,
      autoplayDisableOnInteraction: false,
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 改变自动更新
      observer:true,
      observeParents:true
    });

  }

  private getHeaderSlideData() {
    return [
      {
        alt: "双十一预热主场会",
        src: "assets/img/home-headerSlide-1.jpg"
      },
      {
        alt: "11月11天家电低价不停歇",
        src: "assets/img/home-headerSlide-2.jpg"
      },
      {
        alt: "家具盛典 好货提前抢",
        src: "assets/img/home-headerSlide-3.jpg"
      },
      {
        alt: "IT抢券节",
        src: "assets/img/home-headerSlide-4.jpg"
      },
      {
        alt: "潮流数码 双11爽购攻略",
        src: "assets/img/home-headerSlide-5.jpg"
      }
    ];
  }

  startPage(pageUrl) {
    if (pageUrl == "search") {

    } else if (pageUrl == "login") {

    }

  }
  categoryLeftClick=function(e){
    e.target.className='nav-current';
    $(e.target).siblings().removeClass().addClass('nav-blur');
  };


}
