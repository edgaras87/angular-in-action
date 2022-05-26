import { Component } from '@angular/core';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent {
  cost: number = 0;
  value: number = 0;
  change: number = 0;
  stocks: any = [];

}
