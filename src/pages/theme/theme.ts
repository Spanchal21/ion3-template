import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { ThemeProvider } from '../../providers/theme/theme';

@IonicPage()
@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html',
})
export class ThemePage {

  constructor(public navCtrl: NavController, 
      				public navParams: NavParams,
      				public event: Events,
              public themeCtrl : ThemeProvider,
          ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemePage');
  }

  // theme : string; //= 'dark-theme';
  // fnChangeTheme() {
  //   this.theme = this.themeCtrl.setTheme();
  // }

}
