import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule,} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import {Data} from '../providers/data';
// import {LearnTabPage} from "../pages/learn-tab-page/learn-tab-page";
// import {TabHomePage} from "../pages/learn-tab-page/tab-home-page/tab-home-page";
// import {TabDiscoverPage} from "../pages/learn-tab-page/tab-discover-page/tab-discover-page";
// import {TabBroadcastPage} from "../pages/learn-tab-page/tab-look-page/tab-look-page";
// import {TabMessagesPage} from "../pages/learn-tab-page/tab-shopcart-page/tab-shopcart-page";
// import {TabMorePagePage} from "../pages/learn-tab-page/tab-my-page-page/tab-my-page-page";
import {GoodListsPage} from "../pages/learn-tab-page/good-lists-page/good-lists-page";
import {GoodsService} from "../providers/goods-service";
import {HttpModule} from "@angular/http";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {GoodDetailPage} from "../pages/learn-tab-page/good-detail-page/good-detail-page";
import {LookService} from "../providers/look-service";
// import {LookContentPage} from "../pages/learn-tab-page/look-content-page/look-content-page";
import {SuperTabsModule} from "ionic2-super-tabs";
import {TabHomePageModule} from "../pages/learn-tab-page/tab-home-page/tab-home-page.module";
import {TabBroadcastPageModule} from "../pages/learn-tab-page/tab-look-page/tab-look-page.module";
import {TabDiscoverPageModule} from "../pages/learn-tab-page/tab-discover-page/tab-discover-page.module";
import {TabMorePagePageModule} from "../pages/learn-tab-page/tab-my-page-page/tab-my-page-page.module";
import {TabMessagesPageModule} from "../pages/learn-tab-page/tab-shopcart-page/tab-shopcart-page.module";
import {LearnTabPageModule} from "../pages/learn-tab-page/learn-tab-page.module";
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    LazyLoadImageModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true' ,       //隐藏全部子页面tabs
      iconMode: 'ios',
      mode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
    }),
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot(),//就这里
    LearnTabPageModule,
    TabHomePageModule,
    TabBroadcastPageModule,
    TabDiscoverPageModule,
    TabMorePagePageModule,
    TabMessagesPageModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    Data,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoodsService,
    LookService,
  ]
})
export class AppModule {
}
