import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let stocks: Array<string> = ['AAPL','GOOG','FB','AMZN','TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

export interface NewsInterface {
  url: string,
  title: string
}

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) { }

  get() {
    return stocks.slice();
  }

  add(stock: string) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock: string) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: Array<string>) {
    if(symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    };
  }

  getNewsSnapshot(source: string = 'the-wall-street-journal') {
    //https://angular2-in-action-api.herokuapp.com/stocks/news/snapshot?source=
    return this.http.get<NewsInterface>(service + '/stocks/news/snapshot?source=' + source);
  }

}
