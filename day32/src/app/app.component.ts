import { Component, ViewChild } from '@angular/core';
import { Orderlist } from './models';
import { v4 as uuid } from 'uuid';
import { PoComponent } from './components/po.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day32';

  @ViewChild('po')
  po!: PoComponent 

  order!: Orderlist;
  map: Map<string, Orderlist> = new Map();
  idEdit: string=''; 


  createMap(item: Orderlist) {
    if (this.idEdit == '')
      this.map.set(uuid().substring(0, 8),item);
    else 
      this.map.set(this.idEdit, item)
      this.idEdit=''
  }

  updateMap(id: string){
    this.idEdit=id
    console.info(">>> uuid", id)
    this.order = this.map.get(id)!
    this.po.fill(this.order)
  }


}
