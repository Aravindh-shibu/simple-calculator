import { Component } from '@angular/core';

@Component({
  selector: 'app-lengthconvert',
  templateUrl: './lengthconvert.component.html',
  styleUrls: ['./lengthconvert.component.css']
})
export class LengthconvertComponent {
  lenInMeter:number=0
  lenInCentemeter:number=0

  meterToCentemeter(){
    this.lenInCentemeter=(this.lenInMeter*100);
  }
  centemeterToMeter(){
    this.lenInMeter=(this.lenInCentemeter/100); 
   }


}
