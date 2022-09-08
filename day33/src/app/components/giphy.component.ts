import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { giphy } from '../models';
import { GiphyService } from '../service/giphySvc';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit, OnDestroy {

  @Output()
  gif!: giphy
  gifNew = new Subject<giphy>()

  sub$!: Subscription
  form!: FormGroup

  
  constructor(private fb: FormBuilder, private giphySvc: GiphyService) { }

  processForm() {
    console.info(">>> Order List Form value: ", this.form.value )
    const reg: giphy= this.form.value as giphy
    this.gifNew.next(reg)
    this.form = this.createForm()

  }

  private createForm(): FormGroup{
    return this.fb.group({
      api: this.fb.control<string>(this.gif?.api, [Validators.required]),
      search: this.fb.control<string>(this.gif?.search, [Validators.required]),
      limit: this.fb.control<number>(25 ),
      rating: this.fb.control<string>('g' )

    })

  }

  search(){
    const gify : giphy = this.form.value as giphy
    this.form = this.createForm()
    console.info('Search', gify)
    this.giphySvc.getGiphy(gify)
      .then(result => {
        console.info('Result', result)
        // Only save if call is successful
        this.saveAPIKey(gify.api)
        this.giphySvc.onNewData.next(result)
      })
      .catch(err =>{
        console.error("Error", err)
      })
  }

  private getAPIKey(): string|null {
    let key = localStorage.getItem('apiKey')
    if (!key) 
      return ''
    return key
  }

  private saveAPIKey(key: string) {
    localStorage.setItem('apiKey', key)
  }

  ngOnInit(): void {
    this.form = this.createForm()
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
      
  }

}
