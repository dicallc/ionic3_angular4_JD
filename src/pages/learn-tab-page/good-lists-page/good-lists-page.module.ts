import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodListsPage } from './good-lists-page';

@NgModule({
  declarations: [
    GoodListsPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodListsPage),
  ],
  exports: [
    GoodListsPage
  ]
})
export class GoodListsPageModule {}
