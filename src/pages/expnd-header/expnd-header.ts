import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-expnd-header',
  templateUrl: 'expnd-header.html',
})
export class ExpndHeaderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpndHeaderPage');
  }

  onInput(){
  	console.log('onInput()');
  }

	onCancel(){
		console.log('onCancel()');
	}

}
