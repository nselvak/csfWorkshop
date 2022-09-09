import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Registration } from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form!: FormGroup

  @Output()
  newReg = new Subject<Registration>()

  private createForm(): FormGroup{
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      email: this.fb.control<string>('', [Validators.required, Validators.email]),

    })
  }  
  
  ngOnInit(): void {
    // console.info("Form created", this.form.value)
    this.form = this.createForm()
  }

  processForm() {
    const reg: Registration= this.form.value as Registration
    console.info(">>> Registration: ", reg)
    this.newReg.next(reg)
    this.form = this.createForm()

  }

}
