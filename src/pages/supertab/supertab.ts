import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { SuperTabsModule } from '../../../ionic2-super-tabs/src';

@IonicPage()
@Component({
  selector: 'page-supertab',
  templateUrl: 'supertab.html'
})
export class SupertabPage {

  tab1Root = 'ListPage';
  tab2Root = 'LanguagePage';
  tab3Root = 'MyformPage';
  tab4Root = 'HomePage';
  tab5Root = 'TabPage';
  

  constructor(public navCtrl: NavController) {
  }

  onTabSelect(tab: { index: number; id: string; }) {
  	
  }

}
