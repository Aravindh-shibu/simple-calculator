import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
  emiForm= new FormGroup({
    amount:new FormControl("",Validators.required),
    interest :new FormControl("",Validators.required),
    tenure:new FormControl("",Validators.required)
  })

  get amount(){
    return this.emiForm.get("amount")
  }


  get interest(){
    return this.emiForm.get("interest")
  }

  get tenure(){
    return this.emiForm.get("tenure")
  }

  // emi(){
  //   console.log(this.emiForm.value);
    
  // }
emi:number=0
totalPayableAmount=0
totalInterestPayable=0
calculateEmi(){
  let p=Number(this.amount?.value)
  let r=Number(this.interest?.value)/12
  let i=r/100
  let n=Number(this.tenure?.value)*12
  let onePlusR=(1+i)**n
  this.emi=Math.round((p*i*onePlusR)/(onePlusR-1))
  this.totalPayableAmount=this.emi*n
  this.totalInterestPayable=this.totalPayableAmount-p





} 
}



