import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabDiscoverPage } from './tab-discover-page';

@NgModule({
  declarations: [
    TabDiscoverPage,
  ],
  imports: [
    IonicPageModule.forChild(TabDiscoverPage),
  ],
  exports: [
    TabDiscoverPage
  ]
})
export class TabDiscoverPageModule {}
