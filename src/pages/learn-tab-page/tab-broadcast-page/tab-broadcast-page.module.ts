import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabBroadcastPage } from './tab-broadcast-page';

@NgModule({
  declarations: [
    TabBroadcastPage,
  ],
  imports: [
    IonicPageModule.forChild(TabBroadcastPage),
  ],
  exports: [
    TabBroadcastPage
  ]
})
export class TabBroadcastPageModule {}
