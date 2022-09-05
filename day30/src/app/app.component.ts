import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'day30';

  count = 0

  ngOnInit(): void {
    this.count = Math.floor(Math.random() * 31)
      
  }

}
