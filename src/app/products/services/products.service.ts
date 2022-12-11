import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get(environment.baseApi+'products')
  }
  getCategories(){
    return this.http.get(environment.baseApi+'products/categories')
  }
  getProductsByCategories(category:string){
    return this.http.get(environment.baseApi+"products/category/"+category)
  }
  cartFromLocalStorage(){
    if('cart' in localStorage){
      let data:string = localStorage.getItem('cart')!
      return JSON.parse(data)
    }
    return [];
  }
  addToCartProduct(products:any){
    localStorage.setItem('cart',JSON.stringify(products))
  }

  getProductById(id:any){
    return this.http.get(environment.baseApi+'pro/'+id)
  }
}
