import { Component, Input } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  @Input() stock: any;

  isNegative() {

    if(!this.stock || this.stock.change >= 0) {
      return false;
    }

    return true;
  }

  isPositive() {

    if(!this.stock || this.stock.change <= 0) {
      return false;
    }

    return true;
  }

}
