import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { TabDiscoverPage } from './tab-discover-page';
import {GoodDetailPage} from "../good-detail-page/good-detail-page";
import {GoodListsPage} from "../good-lists-page/good-lists-page";
import {TabDiscoverPage} from "./tab-discover-page";

@NgModule({
  declarations: [
    GoodListsPage,
    GoodDetailPage,
    TabDiscoverPage,
  ],
  imports: [
    IonicPageModule,
    // IonicPageModule.forChild(TabDiscoverPage),
  ],
  entryComponents:[
    GoodListsPage,
    GoodDetailPage,
    TabDiscoverPage,
  ],
  exports: [
    IonicPageModule
  ]
})
export class TabDiscoverPageModule {}
