import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnTabPage } from './learn-tab-page';

@NgModule({
  declarations: [
    LearnTabPage,
  ],
  imports: [
    IonicPageModule.forChild(LearnTabPage),
  ],
  exports: [
    LearnTabPage
  ]
})
export class LearnTabPageModule {}
