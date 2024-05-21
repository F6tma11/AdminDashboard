import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent  {
  constructor(private router:Router){

  }
  goToConfirmEmail(){
  
    this.router.navigate(['/confirmEmail'])
    console.log("fatma")
  }


}
