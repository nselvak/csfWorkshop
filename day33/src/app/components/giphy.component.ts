import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { giphy } from '../models';
import { GiphyService } from '../service/giphySvc';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit{

  form!: FormGroup
  constructor(private fb: FormBuilder, private giphySvc: GiphyService) {}


  ngOnInit(): void {
    // console.info("Form created", this.form.value)
    this.form = this.createForm()

  }

  searchForm(){
    //console.info("here")
    const gify : giphy = this.form.value as giphy
    console.info('Search: ', gify)
    this.giphySvc.getGiphy(gify)
      .then(result => {
        console.info('Result', result)
        // Only save if call is successful
        this.saveAPIKey(gify.api)
        this.form = this.createForm()
        this.giphySvc.onNewData.next(result)
      })
      .catch(err =>{
        console.error("Error", err)
      })
  }

  private createForm(): FormGroup{
    return this.fb.group({
      api: this.fb.control<string>('', [Validators.required]),
      search: this.fb.control<string>('', [Validators.required]),
      limit: this.fb.control<number>(25 ),
      rating: this.fb.control<string>('g' )

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

  


}
