import { Component } from '@angular/core';
import { GiphyService } from './service/giphySvc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day33';

  constructor(private giphySvc: GiphyService){}
}
