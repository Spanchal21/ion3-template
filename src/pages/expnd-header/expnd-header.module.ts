import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpndHeaderPage } from './expnd-header';


import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ExpndHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpndHeaderPage),
    ComponentsModule
  ],
   exports:[
  	ExpndHeaderPage
  ]
})
export class ExpndHeaderPageModule {}
