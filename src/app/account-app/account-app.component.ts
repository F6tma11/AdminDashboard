import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-app',
  templateUrl: './account-app.component.html',
  styleUrl: './account-app.component.css'
})
export class AccountAppComponent {
  sellerRequest:any[]=[];
  seller:any;
  constructor(private http:HttpClient){
    this.getAllRequests();
  }

  getAllRequests(){
    
      debugger;
      this.http.get('https://planterappangular.runasp.net/api/User/GetRequests').subscribe((Res: any) => {
        console.warn(Res);
        this.sellerRequest = Res;
      })

  }

  DeleteSeller(event:any,id:number){
    this.http.get<any>('https://planterappangular.runasp.net/api/User/RejectRequest/' + id)
      .subscribe(
        (res: any) => {
          // Validate the response data before assigning it
          if (typeof res === 'string') {
            console.error('Unexpected response format. Expected JSON data.');
            // Handle the error (e.g., display an error message to the user)
            return;
          }
  
          console.warn(res);
          this.seller = res;
          
        },
        error => {
          console.error('Error fetching data:', error);
          // Handle the error appropriately (e.g., display an error message to the user)
        }
      );
    this.getAllRequests();
  }

  acceptSeller(event: any, id: number) {
    this.http.get<any>('https://planterappangular.runasp.net/api/User/AcceptRequest/' + id)
      .subscribe(
        (res: any) => {
          // Validate the response data before assigning it
          if (typeof res === 'string') {
            console.error('Unexpected response format. Expected JSON data.');
            // Handle the error (e.g., display an error message to the user)
            return;
          }
  
          console.warn(res);
          this.seller = res;
          
        },
        error => {
          console.error('Error fetching data:', error);
          // Handle the error appropriately (e.g., display an error message to the user)
        }
      );
      this.getAllRequests();
  }
}

