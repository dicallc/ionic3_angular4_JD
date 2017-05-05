import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodDetailPage } from './good-detail-page';

@NgModule({
  declarations: [
    GoodDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodDetailPage),
  ],
  exports: [
    GoodDetailPage
  ]
})
export class GoodDetailPageModule {}
