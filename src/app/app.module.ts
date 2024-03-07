import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { CubeComponent } from './cube/cube.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BmiComponent } from './bmi/bmi.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { LengthconvertComponent } from './lengthconvert/lengthconvert.component';
import { RegisterComponent } from './register/register.component';
import { LogiinComponent } from './logiin/logiin.component';
import { EmiComponent } from './emi/emi.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    CubeComponent,
    BmiComponent,
    TemperatureComponent,
    LengthconvertComponent,
    RegisterComponent,
    LogiinComponent,
    EmiComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
