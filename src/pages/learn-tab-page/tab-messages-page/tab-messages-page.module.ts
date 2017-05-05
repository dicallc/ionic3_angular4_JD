import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabMessagesPage } from './tab-messages-page';

@NgModule({
  declarations: [
    TabMessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(TabMessagesPage),
  ],
  exports: [
    TabMessagesPage
  ]
})
export class TabMessagesPageModule {}
