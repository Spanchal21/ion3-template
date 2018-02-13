import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SgrApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { SweetAlertService } from 'angular-sweetalert-service';
import { ThemeProvider } from '../providers/theme/theme';
import { ParticlesProvider } from '../providers/particles/particles';
import { SuperTabsModule } from '../../ionic2-super-tabs/src';

//=================== translate ========================
export function HttpLoaderFactory(http: HttpClient) {
 // return new TranslateHttpLoader(http);
 return new TranslateHttpLoader(http, './assets/i18n/', '.json');
} 
//------------------------------------------------------

@NgModule({
  declarations: [
    SgrApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
         provide: TranslateLoader,
         useFactory: HttpLoaderFactory,
         deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(SgrApp, {backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom', //
      menuType:'overlay', // menu open type
      tabsHighlight:true, // selected tab underline highlite
      swipeBackEnabled:true, //ios swipe to back page
      activator : 'ripple', //button touch effect
      pageTransition: 'ios-transition'},
    ),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SgrApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ParticlesProvider,
    SweetAlertService,
    ThemeProvider
    
  ]
})
export class AppModule {}
