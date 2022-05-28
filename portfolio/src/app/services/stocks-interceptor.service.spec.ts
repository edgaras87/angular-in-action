import { TestBed } from '@angular/core/testing';

import { StocksInterceptorService } from './stocks-interceptor.service';

describe('StocksInterceptorService', () => {
  let service: StocksInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StocksInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
