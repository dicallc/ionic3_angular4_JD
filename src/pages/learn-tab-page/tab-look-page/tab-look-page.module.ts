import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabBroadcastPage } from './tab-look-page';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    TabBroadcastPage,
  ],
  imports: [
    IonicPageModule.forChild(TabBroadcastPage),
    SuperTabsModule,
  ],
  exports: [
    TabBroadcastPage
  ]
})
export class TabBroadcastPageModule {}
