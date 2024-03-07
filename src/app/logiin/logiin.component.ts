import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-logiin',
  templateUrl: './logiin.component.html',
  styleUrls: ['./logiin.component.css']
})
export class LogiinComponent {

  regForm=new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  }

  )

  get username(){
    return this.regForm.get("username")
  }



  get password(){
    return this.regForm.get("password")
  }



  logiin(){
    console.log(this.regForm.value);
    
  }

}


