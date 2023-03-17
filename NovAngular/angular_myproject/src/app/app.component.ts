import { ChangeDetectionStrategy, Component } from '@angular/core';// import section :where we add dependancy class

@Component({  // component directive section :metadata about component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // main component class :where we write code logic
  title = 'angular_myproject'; // properties
  myName = 'Akshay';
  mySurname: string = 'patil';
  mySurname2?: string; //syntex change
  constructor() { //constructor :just normal function but it will trigger implacity by compiler
    console.log('inside constructor..');
  }

  test() {
    this.mySurname2 = 'lodhe';
  }

  test2() {
    this.test();
  }

}
