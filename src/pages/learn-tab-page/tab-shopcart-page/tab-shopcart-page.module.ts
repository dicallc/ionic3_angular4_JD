import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabMessagesPage } from './tab-shopcart-page';

@NgModule({
  declarations: [
    TabMessagesPage,
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    IonicPageModule
  ],
  entryComponents:[TabMessagesPage],
})
export class TabMessagesPageModule {}
