import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pera-header',
  templateUrl: 'pera-header.html',
})
export class PeraHeaderPage {

	@ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeraHeaderPage');
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

}
