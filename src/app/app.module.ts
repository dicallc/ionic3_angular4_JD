import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule,} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import {Data} from '../providers/data';
import {LearnTabPage} from "../pages/learn-tab-page/learn-tab-page";
import {TabHomePage} from "../pages/learn-tab-page/tab-home-page/tab-home-page";
import {TabDiscoverPage} from "../pages/learn-tab-page/tab-discover-page/tab-discover-page";
import {TabBroadcastPage} from "../pages/learn-tab-page/tab-broadcast-page/tab-broadcast-page";
import {TabMessagesPage} from "../pages/learn-tab-page/tab-messages-page/tab-messages-page";
import {TabMorePagePage} from "../pages/learn-tab-page/tab-more-page-page/tab-more-page-page";
import {Splash} from "../pages/splash/splash";
import {GoodListsPage} from "../pages/learn-tab-page/good-lists-page/good-lists-page";
import {GoodsService} from "../providers/goods-service";
import {HttpModule} from "@angular/http";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {GoodDetailPage} from "../pages/learn-tab-page/good-detail-page/good-detail-page";
@NgModule({
  declarations: [
    MyApp,
    LearnTabPage,
    TabHomePage,
    TabDiscoverPage,
    TabBroadcastPage,
    TabMessagesPage,
    TabMorePagePage,
    GoodListsPage,
    Splash,
    GoodDetailPage,
  ],
  imports: [
    LazyLoadImageModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true'         //隐藏全部子页面tabs
    }),
    IonicStorageModule.forRoot() //就这里

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LearnTabPage,
    TabHomePage,
    TabDiscoverPage,
    TabBroadcastPage,
    TabMessagesPage,
    TabMorePagePage,
    GoodListsPage,
    Splash,
    GoodDetailPage

  ],
  providers: [
    Data,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoodsService,
  ]
})
export class AppModule {
}
