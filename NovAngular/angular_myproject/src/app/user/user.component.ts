import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  inputBoxValue: any;
  myFunction(value: any) {
    this.inputBoxValue = value;
  }
} 