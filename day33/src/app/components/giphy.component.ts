import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyService } from '../service/giphySvc';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit, OnDestroy {

  sub$!: Subscription
  
  constructor(private giphySvc: GiphyService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
      
  }

}
