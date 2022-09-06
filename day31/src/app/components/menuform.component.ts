import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { Menu } from '../models';

@Component({
  selector: 'app-menuform',
  templateUrl: './menuform.component.html',
  styleUrls: ['./menuform.component.css']
})
export class MenuformComponent implements OnInit {

  
  @Output()
  newMenu = new Subject<Menu>()

  @Input()
  menu!: Menu
  
  form!:FormGroup

  constructor(private fb: FormBuilder) {
    console.info(">>> fb: ", fb)
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control(this.menu?.name, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      price: this.fb.control(this.menu?.price, [Validators.required]),
      quantity: this.fb.control(this.menu?.quantity, [Validators.required])
    })
  }

  processForm(){
    console.info(">>> Menu Form value: ", this.form.value )
    const reg: Menu= this.form.value as Menu

    this.newMenu.next(reg)

  }

}
