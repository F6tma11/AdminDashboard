import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  loginObj: any = {
    "email": "",
    "password": ""
  }
  apiError: any[] = [];
  result: any;
  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit(): void {

  }
  login() {

    this.http.post('https://planterappangular.runasp.net/api/Auth/Login', this.loginObj).subscribe((result: any) => {
      if (result.iAuthinticated) {
        alert('login success');
        localStorage.setItem('logintoken', result.tokens);
        this.router.navigate(['/home']);
        console.log("fatma");
      } else {

      }
    },
      error => {

        alert("Email Or Password Is Incorrect !!");
      });

  }
}




