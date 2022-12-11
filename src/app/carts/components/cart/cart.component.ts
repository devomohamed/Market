import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts:any[] = []
  success:boolean = false
  constructor(private productsService:ProductsService,private cartService:CartsService) { }

  getCartProducts(){
    this.cartProducts = this.productsService.cartFromLocalStorage()
  }

  get total(){
    let totalMoney = 0
    this.cartProducts.forEach(ele=>totalMoney += ele.quantity * ele.item.price)
    return totalMoney
  }

  deleteAll(){
    localStorage.removeItem('cart')
    this.cartProducts = []
  }

  deleteItem(id:any){
    this.cartProducts = this.cartService.deleteProductCart(id)
  }

  addAmount(i:any){
    this.cartProducts[i].quantity += 1
    this.productsService.addToCartProduct(this.cartProducts)
  }
  minsAmount(i:any,id:any){
    if(this.cartProducts[i].quantity <= 1){
      // this.deleteItem(id)
    }else{
      this.cartProducts[i].quantity -= 1
    }
    this.productsService.addToCartProduct(this.cartProducts)
  }
  addCart(){
    let products = this.cartProducts.map(item =>{
      return {productId:item.item.id , quantity:item.quantity}
    })

    let Model = {
      userId:5,
      date:new Date(),
      products
    }
    this.cartService.createNewCart(Model).subscribe({
      next:(data:any)=>{
        this.success = true
        
      },
      error:(e)=>{
        console.log(e);
        
      }
    })
    
    
  }

  ngOnInit(): void {
    this.getCartProducts()
  }

}
