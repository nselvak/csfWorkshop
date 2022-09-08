import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyService } from '../service/giphySvc';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnDestroy {

  images: string[] = []
  sub$!: Subscription

  constructor( private giphySvc: GiphyService) { }

  ngOnInit(): void {
    this.sub$ = this.giphySvc.onNewData.subscribe(
      urls => {
        this.images = urls
      }
    )
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
      
  }

}
