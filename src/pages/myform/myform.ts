import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@IonicPage()
@Component({
  selector: 'page-myform',
  templateUrl: 'myform.html'
})

export class MyformPage {

  data : any ;

  shownGroup:any;
  accrodion : any = {showDetails: false,icon: 'ios-remove-circle-outline' };
  // accrodionlist : any = {showDetails: false,icon: 'ios-remove-circle-outline' };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public androidPermissions: AndroidPermissions,
              
              ) {

    this.data = [{name:'one',detail:'one detail'},
                {name:'two',detail:'two detail'},
                {name:'three',detail:'three detail'},
                {name:'four',detail:'four detail'}]
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

//============ accrodion ===============

  

  accrodionDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
       data.icon = 'ios-add-circle-outline';
    } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
    }
  }

  accrodionListDetails(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

  
} 


