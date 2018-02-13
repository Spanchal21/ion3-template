import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import swal from "sweetalert2";
@IonicPage()
@Component({
  selector: 'page-sweetalert',
  templateUrl: 'sweetalert.html',
})
export class SweetalertPage {

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams
  			  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SweetalertPage');
  }

  fnDelete(){
  	swal({
		  title: "Are you sure?",
			  text: "You will not be able to recover this imaginary file!",
			  type: "warning",
			  showCancelButton: true,
			  confirmButtonClass: "btn-danger",
			  confirmButtonText: "Yes, delete it!",
			  cancelButtonText: "No, cancel plx!",
			  // closeOnConfirm: false,
			  // closeOnCancel: false
		}).then((result) => {
			  if (result.value) {
			    swal(
			      'Deleted!',
			      'Your imaginary file has been deleted.',
			      'success'
			    )
			  // For more information about handling dismissals please visit
			  // https://sweetalert2.github.io/#handling-dismissals
			  } else {
			    swal(
			      'Cancelled',
			      'Your imaginary file is safe :)',
			      'error'
			    )
			  }
		})

  }

}
