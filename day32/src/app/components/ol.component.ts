import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Orderlist } from '../models';

@Component({
  selector: 'app-ol',
  templateUrl: './ol.component.html',
  styleUrls: ['./ol.component.css']
})
export class OlComponent implements OnInit {

  @Input()
  map!: Map<string, Orderlist>

  @Output()
  formChange = new Subject<String>()

  constructor() { }

  ngOnInit(): void {
  }

  send(i: string) {
    console.info(">>> Send id ", i)
    this.formChange.next(i)

  }

}
