import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:Product[] = []
  categories:string[] = []
  cartProducts:any[] = []

  constructor(private productService:ProductsService) { }

  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next:(res:any)=>{
        this.products = res
        // console.log(res);
        
      },
      error:(e)=>{
        alert(e.message)
      }
    })
  }

  getCategories(){
    this.productService.getCategories().subscribe({
      next:(res:any)=>{
        this.categories = res
        // console.log(res);
        
      },
      error:(e)=>{
        alert(e.message)
      }
    })
  }
  filterCategories(categories:any){
    let category = categories.target.value
    // console.log(category);
    if(category != 'all'){
      this.productService.getProductsByCategories(category).subscribe({
        next:(res:any)=>{
          this.products = res
          // console.log(res);
          
        },
        error:(e)=>{
          alert(e.message)
        }
      })
    }else{
      this.getAllProducts()
    }
  }
  addToCart(product:any){
    // console.log(product);
    
    this.cartProducts = this.productService.cartFromLocalStorage()
    let exist = this.cartProducts.find(item => product.item.id == item.item.id)
    if(exist){

    }else{
      this.cartProducts.push(product)
      this.productService.addToCartProduct(this.cartProducts)
    }
  }

  ngOnInit(): void {
    this.getAllProducts()
    this.getCategories()
    
  }

}
