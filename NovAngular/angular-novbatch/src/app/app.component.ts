import { Component } from '@angular/core'; // import section : where we add dependency classes

@Component({  // component  Directive section: metadata  about component 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //main component class : where we write code logic 
  title = 'angular-novbatch'; //properties 
  myName = 'Akshay'
  mySurname : string = 'patil'
  mySurname2? :string; //syntex change 
 // mySurname2? :string; 
 
  constructor (){ // constructor : just normal function but it will trigger implacity by complier
 console.log('inside constructor..');
 
  }

  test(){
this.mySurname2 ='Lodhe'

  }

  test2(){
    this.mySurname2 =this.mySurname;
    this.test();
  }
}
