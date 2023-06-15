import { Component } from '@angular/core'; // import section  : where we add dependancy classes

@Component({ //component directive section : metadata about component 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { // main component class : where we write code logic 
  title = 'angularpro'; // properties  
  myName = "Akshay";
  mysurname : string = "lodhe";
  mysurname2? : string; //syntex change
  //mysurname2 : string
  constructor() { // constructor : just normal function but it wiill trigger implicty by complier
    console.log('inside constructor..');
  }

test(){
this.mysurname2 = 'Patil';
}

test2(){
  this.mysurname2 = this.mysurname;
  this.test();
}
}