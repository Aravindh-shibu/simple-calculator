import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  height:number=0
  weight:number=0
  bmi:number=0

  calculateBmi(){
    this.bmi=this.weight/(this.height/100)**2
  }

}
