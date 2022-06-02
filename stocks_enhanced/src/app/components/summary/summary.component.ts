import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  animations: [
    trigger('fadeIn', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(300)
      ])
    ])
  ]
})
export class SummaryComponent {

  @Input() stock: any;

  // isNegative() {
  //   if(!this.stock || this.stock.change >= 0) {
  //     return false;
  //   }
  //   return true;
  // }

  // isPositive() {
  //   if(!this.stock || this.stock.change <= 0) {
  //     return false;
  //   }
  //   return true;
  // }

}
