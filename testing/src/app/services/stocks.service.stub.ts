import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs';
import { MockStocksResponse } from "./stocks.mock";
import { StockInterface, StocksService } from "./stocks.service";


export class StubStocksService extends StocksService {
    constructor() {
        super({} as HttpClient);
    }

    override load(symbols: string[]){
        return of(MockStocksResponse);    
    }
}