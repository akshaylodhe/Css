import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {
data =  [58,86,56,28,];
myname = "Akshay patil";
disableBox = false;
no = 70;
surName="Lodhe";

getvalues(){
 // return 'raj'
 return this.disableBox
}
changingInputValue(){
  return this.surName;
}
}



