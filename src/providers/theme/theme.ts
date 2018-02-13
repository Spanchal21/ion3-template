import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

import { GlobleVariable } from '../../models/globle';

@Injectable()
export class ThemeProvider {

  constructor(public event: Events) {
    console.log('Hello ThemeProvider Provider');

    this.event.subscribe('theme', () => {
        this.setTheme();
      });

  }

  theme:string;
  setTheme() {
    if (this.theme == 'dark-theme') {
      this.theme = 'light-theme';
    } else {
      this.theme = 'dark-theme';
    }

    


    GlobleVariable.globleTheme = this.theme;
     this.theme = GlobleVariable.globleTheme;

     console.log('theme provider : '+ this.theme);
    return this.theme;
  }

}
