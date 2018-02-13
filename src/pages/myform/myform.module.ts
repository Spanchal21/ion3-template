import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyformPage } from './myform';

@NgModule({
  declarations: [
    MyformPage,
  ],
  imports: [
    IonicPageModule.forChild(MyformPage),
  ],
  exports: [
    MyformPage
  ]
})
export class MyformPageModule {}
