import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrl: './confirm-email.component.css'
})
export class ConfirmEmailComponent {
  constructor(private router:Router){

  }
  goToNewPassword(){
  
    this.router.navigate(['/newPassword'])
    console.log("fatma")
  }
}
