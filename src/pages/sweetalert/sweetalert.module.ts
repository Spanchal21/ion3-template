import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SweetalertPage } from './sweetalert';

@NgModule({
  declarations: [
    SweetalertPage,
  ],
  imports: [
    IonicPageModule.forChild(SweetalertPage),
  ],
  exports: [
  		SweetalertPage
  ]
})
export class SweetalertPageModule {}
