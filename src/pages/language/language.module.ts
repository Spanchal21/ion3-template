import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanguagePage } from './language';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LanguagePage,
  ],
  imports: [
    IonicPageModule.forChild(LanguagePage),
    TranslateModule
  ],
  exports:[
  	LanguagePage
  ]
})
export class LanguagePageModule {}
