import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';

import swal from "sweetalert2";

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

	myArrayData : any;
	modufiedData : any;
  searching:boolean = true;
  SearchTerm:any = '';
  // searchitems:any = [];
  searchControl: FormControl;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
    this.myArrayData = [{name:'abcd', salary: 20, email:'abcd@gmail.com'},
              {name:'wxyz', salary: 12, email:'wxyz@hotmail.com'},
              {name:'pqrs', salary: 22, email:'pqrs@yahoo.com'},
              {name:'efgh', salary: 30, email:'efgh@mail.com'},
              {name:'lmno', salary: 48, email:'lmno@outlook.com'},
              {name:'rstu', salary: 32, email:'rstu@hotmail.com'},
              {name:'cdef', salary: 22, email:'cdef@outlook.com'},
              {name:'uvwx', salary: 19, email:'uvwx@gmail.com'},
              {name:'defg', salary: 24, email:'defg@mail.com'},
              {name:'opqr', salary: 27, email:'opqr@hotmail.com'},
              {name:'mnop', salary: 31, email:'mnop@gmail.com'},
              {name:'stuv', salary: 20, email:'stuv@outlook.com'},
              {name:'nopq', salary: 40, email:'nopq@gmail.com'},
              {name:'qrst', salary: 44, email:'qrst@outlook.com'}];
    this.fnRefresh();

    this.searching = true;
    this.setFilteredItems();
    this.searchControl.valueChanges.subscribe(search => {
      this.setFilteredItems();
    });


  }


  fnRefresh(){
  	this.modufiedData = [];
  	this.modufiedData  = this.myArrayData;
  }

  fnSum(){
  		let sum = this.modufiedData.reduce((previous , current) => {
  			let prevResult = Number.isInteger(previous) ? previous : previous.salary;
  			 return prevResult + current.salary;
  		});

      swal(
          ''+JSON.stringify(sum),
          'is your Total',
          'success'
        )

  		console.log("SUM : "+ JSON.stringify(sum));
  }

  fnMax(){
  		let most = this.modufiedData.reduce((previous, current) => {
  			let prevResult = Number.isInteger(previous) ? previous : previous.salary;
  			let max = Math.max(prevResult, current.salary);
  			return max;
  		})


      swal(
          ''+JSON.stringify(most),
          'is your max value',
          'success'
        )
  		console.log("MAX : "+ JSON.stringify(most));
  }

  fnFind(){

    swal(
          'Up to 20K',
          'display > 20K',
          'success'
        )

  	this.modufiedData = this.modufiedData.filter((data) => {
  		return data.salary > 20;
  	})
  }

  fnLowHigh(){
  	this.modufiedData.sort(function (a,b){
  		if ( a.salary < b.salary ){
          return -1;
        }else if( a.salary > b.salary ){
          return 1;
        }else{
          return 0; 
        }
  	});
  }

  fnHighLow(){
  	this.modufiedData.sort(function (a,b){
  		if ( a.salary > b.salary ){
          return -1;
        }else if( a.salary < b.salary ){
          return 1;
        }else{
          return 0; 
        }
  	});
  }

  fnAtoZ(){
  	this.modufiedData.sort( function(a, b) {
        if ( a.name < b.name ){
          return -1;
        }else if( a.name > b.name ){
          return 1;
        }else{
          return 0;
        }
      });
  }

  fnZtoA(){
  	this.modufiedData.sort( function(a, b) {
        if ( a.name > b.name ){
          return -1;
        }else if( a.name < b.name ){
          return 1;
        }else{
          return 0; 
        }
      });
  }


//================= Searching =======================
 
  setFilteredItems() {
    this.searching = true;
    this.modufiedData = this.filterItems(this.SearchTerm);
    this.searching = false;
  }

  filterItems(searchTerm){
      return this.myArrayData.filter((item) => {
        return item.name.toLowerCase().indexOf(searchTerm) > -1 || 
                item.name.indexOf(searchTerm) > -1;
      }); 
   }
  

  onCancel(ev) {
    // this.searchTerm = "";
    this.SearchTerm = "";
    this.setFilteredItems();
  }

}
