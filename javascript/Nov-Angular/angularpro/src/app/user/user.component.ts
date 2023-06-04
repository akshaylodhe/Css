import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  inputBoxvalue: any;
  myFunction(value: any) {
    this.inputBoxvalue = value;
  }
  
myEvent(event:any){ 
console.log('...////');
}
}
