import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartArray: any[] = [];
  cart_update:any={
    "id": 0,
  "quntity": 0,
  "product_Id": 0
  };
  searchtext:any;
  cartObj: any = {
    "id": 0,
  "quntity": 0,
  "product_Id": 0
  }
  
  constructor(private http: HttpClient, private activeRoute:ActivatedRoute) {
    this.getAllCarts();

  }



  getAllCarts() {
    debugger;
    this.http.get('https://planterappangular.runasp.net/api/Cart/GetAllCarts').subscribe((Res: any) => {
      console.warn(Res);
      this.cartArray = Res;
    })
  }
  DeleteCart(event:any,id:number){
    this.http.delete('https://planterappangular.runasp.net/api/Cart/DeleteCart/'+id).subscribe((Res: any) => {
      console.warn(Res);
      this.cartArray = Res;
    })
    this.getAllCarts()
  }

  UpdateCart(){
    const updateUrl = `https://planterappangular.runasp.net/api/Cart/UpdateCart/${this.cart_update.id}`;

    this.http.put<any>(updateUrl, this.cart_update) // Use generics for type safety
      .subscribe(
        updatedCartItem => { // Success callback
          console.warn('Cart item updated successfully:', updatedCartItem);

          // Update the local cart array if necessary (consider state management)
          this.cartArray = this.cartArray.map(item => item.id === this.cart_update.id ? updatedCartItem : item);

          // Refresh UI (optional, adjust based on your component structure)
          this.getAllCarts(); // Or update the view directly with updatedCartItem
        },
        error => { // Error callback
          console.error('Error updating cart item:', error);
          // Handle error gracefully, e.g., display an error message to the user
        }
      );

      this.getAllCarts()
  }

  getCart(event:any,id:number){
    this.http.get('https://planterappangular.runasp.net/api/Cart/GetCartByUserId/'+id).subscribe((Res: any) => {
      console.warn(Res);
      this.cart_update = Res;
    })
  }

  getProductsById(searchtext:number) {
    debugger;
    this.http.get('https://planterappangular.runasp.net/api/Cart/GetCartByUserId/'+searchtext).subscribe((Res: any) => {
      console.warn(Res);
      this.cartArray = Res;
    })
  }

  addCart() {

    this.http.post('https://planterappangular.runasp.net/api/Cart/AddToCart', this.cartObj).subscribe((Res: any) => {
      console.warn(Res);
      this.cartArray = Res;
      alert("Added to Cart Successfully...");
    }
      );
      this.getAllCarts()

  }
}
