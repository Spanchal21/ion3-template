import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupertabPage } from './supertab';

import { SuperTabsModule } from '../../../ionic2-super-tabs/src';
// import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    SupertabPage,
  ],
  imports: [
    IonicPageModule.forChild(SupertabPage),
    SuperTabsModule
  ],
  exports: [
  	SupertabPage
  ]
})
export class SupertabPageModule {}
