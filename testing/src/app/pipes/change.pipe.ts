import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { StockInterface } from '../services/stocks.service';

@Pipe({
  name: 'change'
})
export class ChangePipe implements PipeTransform {

  constructor(
    private currencyPipe: CurrencyPipe,
    private precentPipe: PercentPipe
  ) {}

  transform(stock: StockInterface, showPercent: boolean = true) {
    let value = `${this.currencyPipe.transform(stock.change, 'USD', 'symbol', '.2')}`;
    if(showPercent) {
      value += ` (${this.precentPipe.transform(stock.changeInPercent, '.2')})`;
    }
    
    return value;
  }

}
