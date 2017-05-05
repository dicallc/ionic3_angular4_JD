import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabHomePage } from './tab-home-page';

@NgModule({
  declarations: [
    TabHomePage,
  ],
  imports: [
    IonicPageModule.forChild(TabHomePage),
  ],
  exports: [
    TabHomePage
  ]
})
export class TabHomePageModule {}
