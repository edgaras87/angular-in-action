import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { AccountService } from './account.service';
import { ConfigService } from './config.service';
import { Stock } from './stocks.model';

@Injectable()
export class StocksInterceptorService implements HttpInterceptor {

  constructor(private accountService: AccountService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // HttpRequest object is immutable, so clone the object
    const request = req.clone();
    request.headers.append('Accept', 'application/json');
    // will take modified request and pass it along to the HttpClient to use for making the HTTP request.
    return next.handle(request).pipe(
      // allows to do actions that receive the data on the stream, but don’t modify the response itself
      // make sense to do something like logging or caching of the response
      tap( event => {
          if(event instanceof HttpResponse && event.url === ConfigService.get('api')) {
            //  grab a copy of the data
            const stocks = event.body as Array<Stock>;
            let symbols = this.accountService.stocks.map(stock => stock.symbol);

            // implement some logic to look through the stocks we’ve purchased in the Account service
            // and update their current price and value based on the latest prices. When the Account
            // service gets the updated values, the portfolio values will update
            stocks.forEach( stock => {
              this.accountService.stocks.map(item => {
                if(stock.symbol === item.symbol) {
                  item.price = stock.price;
                  item.change = ((stock.price * 100) - (item.cost * 100)) / 100;
                }
              });
            });
            this.accountService.calculateValue();
          }
        })
      )
  }

}
