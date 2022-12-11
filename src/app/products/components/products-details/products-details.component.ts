import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  id:any
  product:any
  loading:boolean =true
  constructor(private route:ActivatedRoute,private productService:ProductsService) {
    this.id = this.route.snapshot.paramMap.get('id')
   }
   getProduct(){
    this.productService.getProductById(this.id).subscribe({
      next:(data)=>{
        this.product = data
        this.loading = false
      },
      error:(e)=>{
        // alert(e);
      }
    })
   }

  

  ngOnInit(): void {
    this.getProduct()
  }

}
