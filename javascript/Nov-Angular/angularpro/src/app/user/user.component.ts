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
  
myEvent(){
console.log("...////");
}
arrayitem =[1,5,9,56,82] 
obj = {
name : 'rinki',
age: 25
}
checkboxEvent(event:any){
console.log('event',event.target.value);

}
checkboxEvent1(event:any){
  console.log('event',event.target.value);
  
  }
  blurEvent(){

    console.log('blur');
    
  }
}