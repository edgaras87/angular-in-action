import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockStocksResponse, MockSymbolsList } from "./stocks.mock";
import { StocksService } from "./stocks.service";


describe('Service: Stocks', () => {
    const baseUrl = 'https://angular2-in-action-api.herokuapp.com';
    let service: StocksService, http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [StocksService]
        });

        

        service = TestBed.inject(StocksService);
        http = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        http.verify();
    });
    
    it('should instantiate', () => {
        expect(service).toBeTruthy();
    });

    it('should manage a list of stocks', () => {
        expect(service.get()).toEqual(MockSymbolsList);
        service.add('TEST');
        expect(service.get()).toEqual([...MockSymbolsList, 'TEST']);
        service.remove('TEST');
        expect(service.get()).toEqual(MockSymbolsList);
    });

    it('should load the stock data from API', (done) => {
        service.load(MockSymbolsList)?.subscribe(result => {
            
            expect(result).toEqual(MockStocksResponse);
            done();
        });

        const request = http.expectOne(baseUrl + '/stocks/snapshot?symbols=' + MockSymbolsList.join(','));
        request.flush(MockStocksResponse);
    });

});