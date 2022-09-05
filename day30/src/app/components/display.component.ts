import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
    state('default', style({ transform: 'rotate(0)' })),
    state('rotated', style({ transform: 'rotate(-180deg)' })),
    transition('rotated => default', animate('400ms ease-out')),
    transition('default => rotated', animate('400ms ease-in'))
  ])
  ]
})
export class DisplayComponent implements OnInit {

  constructor() { }
  @Input() 
  set count(n:number) {
    this._count = n
    this.numberImg = "/assets/numbers/number" + this.count + ".jpg";
    
  }
  get count(): number {
    return this._count
  }
  _count = 0;

  showCount : number[]= []


  numberImg = "/assets/numbers/number" + this.count + ".jpg";
  text = "Number";

  next(){
    console.info("Next Number")
    this.count += 1;
    this.count %= 31;
    this.numberImg = "/assets/numbers/number" + this.count + ".jpg"
    console.info(this.count)
    console.info(this.numberImg)
  }

  prev(){
    console.info("Prev Number")
    this.count -= 1;
    if (this.count == -1){
      this.count=30
    }
    this.count %= 31;
    this.numberImg = "/assets/numbers/number" + this.count + ".jpg"
    console.info(this.count)
    console.info(this.numberImg)
  }


  displayNumber() {
    console.info(">>>>>>app.component: image clicked", this.count)
    this.showCount.push(this.count)
    console.info(">>>>>>List of Number displayed", this.showCount)
    
  }

  state: string = 'default';

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
}

  reset() {
  this.showCount=[]
  this.count = Math.floor(Math.random() * 31)
  this.numberImg = "/assets/numbers/number" + this.count + ".jpg";

}


  ngOnInit(): void {
    this.numberImg = "/assets/numbers/number" + this.count + ".jpg";
    console.info("Random Number", this.count)

  }



}
