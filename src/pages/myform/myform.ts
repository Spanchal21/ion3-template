import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@IonicPage()
@Component({
  selector: 'page-myform',
  templateUrl: 'myform.html'
})

export class MyformPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public formBuilder: FormBuilder,
              public androidPermissions: AndroidPermissions,
              
              ) {
  }

  isActive : any = true;
  fnIcon(){
    this.isActive = this.isActive == true  ? false : true ;
  }

  tapEvent(event){
    alert(JSON.stringify(event));
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MyformPage');
  }


  fnPermission(){
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_CONTACTS).then(
      success => alert('Permission granted'),
      err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.READ_CONTACTS)
    );
  }

  
} 


