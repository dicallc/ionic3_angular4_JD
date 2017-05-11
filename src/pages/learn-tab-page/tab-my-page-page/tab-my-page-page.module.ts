import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabMorePagePage } from './tab-my-page-page';

@NgModule({
  declarations: [
    TabMorePagePage,
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    IonicPageModule
  ],
  entryComponents:[TabMorePagePage]
})
export class TabMorePagePageModule {}
