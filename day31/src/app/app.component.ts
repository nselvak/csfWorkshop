import { Component } from '@angular/core';
import { Menu } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31';
  cartItems: Menu[]= [];

  updateMenu(item: Menu) {
    console.info(">>>> new Item to be added", item)
    this.cartItems.push(item);
    console.info(">>>> Updated Menu", this.cartItems)
  }

  delete(i: number) {
    this.cartItems.splice(i,1)
    console.info(">>>> Remaining items in Menu", this.cartItems)
  }


}
