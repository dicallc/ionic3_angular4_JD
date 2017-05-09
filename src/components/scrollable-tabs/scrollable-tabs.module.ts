import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScrollableTabs } from './scrollable-tabs';

@NgModule({
  declarations: [
    ScrollableTabs,
  ],
  imports: [
    IonicPageModule.forChild(ScrollableTabs),
  ],
  exports: [
    ScrollableTabs
  ]
})
export class ScrollableTabsModule {}
