import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {TabHomePage} from "./tab-home-page/tab-home-page";
import {TabDiscoverPage} from "./tab-discover-page/tab-discover-page";
import {TabBroadcastPage} from "./tab-look-page/tab-look-page";
import {TabMessagesPage} from "./tab-shopcart-page/tab-shopcart-page";
import {TabMorePagePage} from "./tab-my-page-page/tab-my-page-page";
import {LearnTabPage} from "./learn-tab-page";

@NgModule({
  declarations: [
    LearnTabPage,
    // TabHomePage,
    // TabDiscoverPage,
    // TabBroadcastPage,
    // TabMessagesPage,
    // TabMorePagePage,
  ],
  entryComponents: [
    LearnTabPage,
    // TabHomePage,
    // TabDiscoverPage,
    // TabBroadcastPage,
    // TabMessagesPage,
    // TabMorePagePage,
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    IonicPageModule
  ]
})
export class LearnTabPageModule {}
