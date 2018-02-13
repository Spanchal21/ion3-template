import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { ThemeProvider } from '../providers/theme/theme';
import { GlobleVariable } from '../models/globle';

@Component({
  templateUrl: 'app.html'
})
export class SgrApp {
  @ViewChild(Nav) nav: Nav;

  theme : string = 'dark-theme';
  shownGroup = null;
  // acrodian : any = {showDetails: false, icon: 'ios-arrow-forward' }; // for accrodian
  acrodianmenu : any;
  
  rootPage: any = 'SupertabPage';
  name: string;
  pages: Array<{title: string, component: any, icon: any}>;
  menuActive : any ;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public event: Events,
              public modalCtrl: ModalController,
              public splashScreen: SplashScreen,
              public themeCtrl : ThemeProvider,
              public translateService: TranslateService
              ) {

    this.initializeApp();
    this.pages = [
      { title: 'Expandable Header', component: 'ExpndHeaderPage',icon: 'ios-analytics' },
      { title: 'Sweet Alert', component: 'SweetalertPage',icon: 'alert' },
      { title: 'Perallax Header', component: 'PeraHeaderPage', icon: 'image' },
    ];

    this.acrodianmenu = [
      { headername: 'Super Tabs', component: 'SupertabPage', page: [], icon: 'logo-css3' },
      { headername: 'Language', component: 'LanguagePage', page: [],icon: 'ios-analytics' },
      {  headername : "Auther Info", component: '', icon: 'code-working',
        page : [{ title: 'Profile', component: '', icon:'user'},
                ]
      }
    ];
  }

  //========= menu Acrodian ==========
  toggleDetails(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

        this.translateService.setDefaultLang('en');
        this.translateService.use('en');

        this.event.subscribe('theme', () => {
          this.toggleTheme();
        });
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

//============== theme apply function ==============

  
  toggleTheme() {
    //this.theme = 
    this.themeCtrl.setTheme();
    this.theme = GlobleVariable.globleTheme;
  }


  fnAboutModel(){
    let modal = this.modalCtrl.create('AboutPage');
        modal.present();
  }

}
