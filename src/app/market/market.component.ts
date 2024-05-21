import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent {

  productsArray: any[] = [];
  categorysArray: any[] = [];
  searchtext:any;
  categoryName:any;
  constructor(private http: HttpClient, private activeRoute:ActivatedRoute) {
    this.getAllProducts();
   this.getAllCategory()
  }



  getAllProducts() {
    debugger;
    this.http.get('https://planterappangular.runasp.net/api/Product/GetAllProduct').subscribe((Res: any) => {
      console.warn(Res);
      this.productsArray = Res;
    })
  }
  getAllProductsByCategory(categoryName:String) {
    debugger;
    this.http.get('https://planterappangular.runasp.net/api/Product/GetProductOfCategory/'+categoryName).subscribe((Res: any) => {
      console.warn(Res);
      this.productsArray = Res;
    })
  }

  getProductsByName(searchtext:string) {
    debugger;
    this.http.get('https://planterappangular.runasp.net/api/Product/GetProductByName/'+searchtext).subscribe((Res: any) => {
      console.warn(Res);
      this.productsArray = Res;
    })
  }

  categorySelect(event:any){
    let value=event.target.value;
    console.log(value)
  }

  getAllCategory() {
    debugger;
    this.http.get('https://planterappangular.runasp.net/api/Category/GetAllCategory').subscribe((Res: any) => {
      console.warn(Res);
      this.categorysArray = Res;
    })
  }



  




}

