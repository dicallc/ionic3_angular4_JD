import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LookContentPage } from './look-content-page';

@NgModule({
  declarations: [
    LookContentPage,
  ],
  imports: [
    IonicPageModule.forChild(LookContentPage),
  ],
  exports: [
    LookContentPage
  ]
})
export class LookContentPageModule {}
