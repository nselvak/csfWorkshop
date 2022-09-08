import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Menu } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  cart!: Menu[]

  @Output()
  indexChange = new Subject<number>()

  total=0
  

  findTotal(){
    this.total=0
    for ( let item of this.cart){
      console.info(">>> Item to be added to total amount ", item)
      this.total += item.quantity * item.price
      console.info(">>> Totatl amount", this.total)

    }

  }

  send(i: number) {
    console.info(">>> Delete ", i)
    this.indexChange.next(i)

  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
