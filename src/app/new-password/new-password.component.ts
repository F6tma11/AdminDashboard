import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {
  constructor(private router:Router){

  }
  goToLogin(){
  
    this.router.navigate(['/newPassword'])
    console.log("fatma")
  }
}
