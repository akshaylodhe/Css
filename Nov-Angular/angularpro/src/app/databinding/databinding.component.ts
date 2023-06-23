import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {
  data = [10, 80, 8, 20, 5, 834,];

  myName = "Akshay";

  getValue() {
    return 'raj';
  }
  SurName = "lodhe patil"
  no = 76
}
