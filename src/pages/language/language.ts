import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})
export class LanguagePage {

  constructor(public navCtrl: NavController, 
  				public navParams: NavParams,
  				public translate: TranslateService,
          ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagePage');
  }

  gnGujarati(){
  	this.translate.use('gu');
  }

  gnHindi(){
  	this.translate.use('hi');
  }

  gnEnglish(){
  	this.translate.use('en');
  }

}
