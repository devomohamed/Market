import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { 
  }


  deleteProductCart(id:any){
    let dataJson:string = localStorage.getItem('cart')!
    let dataObject = JSON.parse(dataJson)
    let dataUpdated = dataObject.filter((prod:any)=>{return prod.item.id != id})
    localStorage.setItem('cart',JSON.stringify(dataUpdated))
    return dataUpdated
  }

  createNewCart(model:any){
    return this.http.post(environment.baseApi+'carts',model)
  }
}
