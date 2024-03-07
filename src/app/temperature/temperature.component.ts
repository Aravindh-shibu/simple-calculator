import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  tempInCelsius:number=0
  tempInFahrenheit:number=0
  resultInCelsius:number=0
  resultInFahrenheit:number=0

  celsiusToFahrenheit(){
    this.resultInFahrenheit =((this.tempInCelsius*(9/5))+32);
    this.tempInFahrenheit=this.resultInFahrenheit;

  }
  fahrenheitToCelsius(){
    this.resultInCelsius =(5/9*(this.tempInFahrenheit-32));
    this.tempInCelsius=this.resultInCelsius
  }

}
