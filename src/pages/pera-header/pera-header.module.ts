import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeraHeaderPage } from './pera-header';

import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    PeraHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(PeraHeaderPage),
    DirectivesModule
  ],
  exports: [
  	PeraHeaderPage
  ]
})
export class PeraHeaderPageModule {}
