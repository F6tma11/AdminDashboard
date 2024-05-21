import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categoryArray: any[] = [];
  categoryData:any[]=[];
  category_update:any={
    "id": 0,
    "name": "string",
    "description": "string"
  };
  searchtext:any;
  categoryObj: any = {
    "id": 0,
  "name": "string",
  "description": "string"
  }
  
  constructor(private http: HttpClient, private activeRoute:ActivatedRoute) {
    this.getAllCategoris();

  }



  getAllCategoris() {
    debugger;
    this.http.get('https://planterappangular.runasp.net/api/Category/GetAllCategory').subscribe((Res: any) => {
      console.warn(Res);
      this.categoryArray = Res;
    })
  }

  deletCategories() {
    debugger;
    this.http.delete('https://planterappangular.runasp.net/api/Category/GetAllCategory').subscribe((Res: any) => {
      console.warn(Res);
      this.categoryArray = Res;
    })
  }

  UpdateCategory(){
    const updateUrl = `https://planterappangular.runasp.net/api/Category/UpdateCategory/${this.category_update.id}`;

    this.http.put<any>(updateUrl, this.category_update) // Use generics for type safety
      .subscribe(
        updatedCategoryItem => { // Success callback
          console.warn('Cart item updated successfully:', updatedCategoryItem);

          // Update the local cart array if necessary (consider state management)
          this.categoryArray = this.categoryArray.map(item => item.id === this.category_update.id ? updatedCategoryItem : item);

          // Refresh UI (optional, adjust based on your component structure)
          this.getAllCategoris(); // Or update the view directly with updatedCartItem
        },
        error => { // Error callback
          console.error('Error updating cart item:', error);
          // Handle error gracefully, e.g., display an error message to the user
        }
      );

      this.getAllCategoris()
  }

  getCategoryByName(searchtext:string) {
    debugger;
    this.http.get('https://planterappangular.runasp.net/api/Category/GetCategoryById/'+searchtext).subscribe((Res: any) => {
      console.warn(Res);
      this.categoryArray = Res;
    })
  }

  getCategorysById(searchtext:number) {
    debugger;
    this.http.get('https://planterappangular.runasp.net/api/Category/GetCategoryByName/'+searchtext).subscribe((Res: any) => {
      console.warn(Res);
      this.categoryArray = Res;
    })
  }

  addCategory() {

    this.http.post('https://planterappangular.runasp.net/api/Category/AddCategory', this.categoryObj).subscribe((Res: any) => {
      console.warn(Res);
      this.categoryArray = Res;
      alert("Added to Cart Successfully...");
    }
      );
      this.getAllCategoris()

  }

  getCategory(event:any,searchtext:number) {
    debugger;
    this.http.get('https://planterappangular.runasp.net/api/Category/GetCategoryByName/'+searchtext).subscribe((Res: any) => {
      console.warn(Res);
      this.category_update = Res;
    })
  }


}
