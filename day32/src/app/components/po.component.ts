import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ArrayCtrl, Orderlist } from '../models';

@Component({
  selector: 'app-po',
  templateUrl: './po.component.html',
  styleUrls: ['./po.component.css']
})
export class PoComponent implements OnInit {

  @Input()
  order!: Orderlist


  @Output()
  newOrder = new Subject<Orderlist>()

  form!: FormGroup
  itemArrayCtrl!: FormArray;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.info(">>> Form created")
    this.form = this.createForm()
  }



  private createForm(): FormGroup{
    this.itemArrayCtrl = this.fb.array([])
    return this.fb.group({
      name: this.fb.control<string>(this.order?.name, [Validators.required]),
      mobile: this.fb.control<number>(this.order?.mobile, [Validators.required, Validators.pattern("[0-9 ]{8}")]),
      itemList: this.itemArrayCtrl
    })

  }
  
  processForm() {
    console.info(">>> Order List Form value: ", this.form.value )
    const reg: Orderlist= this.form.value as Orderlist
    this.newOrder.next(reg)
    this.form = this.createForm()

  }


  addItem(li?: ArrayCtrl) {
    this.itemArrayCtrl.push(this.createitem(li))
  }

  createitem(li?: ArrayCtrl): FormGroup{
    return this.fb.group({
      item: this.fb.control<string>(li?.item || '', [Validators.required]),
      quantity: this.fb.control<number>(li?.quantity || 1, [Validators.min(1), Validators.max(100)])
    })

  }


  removeItem(idx:number){
    this.itemArrayCtrl.removeAt(idx)
  }

  getValues() {
    return this.form.value
  }

  fill(order: Orderlist) {
    this.form = this.createForm()
    this.form.controls['name'].setValue(order.name)
    this.form.controls['mobile'].setValue(order.mobile)
    this.form.setValue(order.itemList.map(li => this.addItem(li)))
  }
}
