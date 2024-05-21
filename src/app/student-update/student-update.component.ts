import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css'
})
export class StudentUpdateComponent {
  prodoctId!:any;
  productUpdate:any={
    "id": 0,
    "name": "string",
    "description": "string",
    "quantity": 0,
    "price": 0,
    "image": "string",
    "categoryId": 0
  }
  constructor(private http: HttpClient, private activeRoute:ActivatedRoute) {
    this.prodoctId=this.activeRoute.snapshot.paramMap.get('id');
    this.getProductsById()
  }

  getProductsById() {
    debugger;
    this.http.get('https://planterappangular.runasp.net/api/Product/GetProductById/'+this.prodoctId).subscribe((Res: any) => {
      console.warn(Res);
      this.productUpdate = Res;
    })
  }
  UpdateProduct() {
    const updateUrl = `https://planterappangular.runasp.net/api/Product/UpdateProduct/${this.productUpdate.id}`;

    this.http.put(updateUrl, this.productUpdate) // Use generics for type safety
      .subscribe(
        updatedProductItem => { // Success callback
          console.warn('Cart item updated successfully:', updatedProductItem);

          // Update the local product array if necessary (consider state management)
          // ... your logic here

          // Refresh UI (optional, adjust based on your component structure)
          // Or update the view directly with updatedCartItem
        },
        error => { // Error callback
          console.error('Error updating cart item:', error);
          // Handle error gracefully, e.g., display an error message to the user
        }
      );
  }
}
