import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productData:any
  @Output() item = new EventEmitter()
  addButton:boolean = false
  amount:number = 1

  constructor() { }

  add(){
    this.item.emit({item:this.productData,quantity:this.amount})
  }

  ngOnInit(): void {
  }

}
