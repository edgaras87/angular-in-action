import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AccountService } from './services/account.service';
import { StocksComponent } from './stocks/stocks.component';
import { InvestmentsComponent } from './investments/investments.component';
import { StocksInterceptorService } from './services/stocks-interceptor.service';
import { LocalStorageService } from './services/local-storage.service';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './services/alert.service';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    InvestmentsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClarityModule
  ],
  providers: [
    AlertService,
    AccountService,
    CurrencyPipe,
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StocksInterceptorService,
      // (multi) can provide a new service that gets bundled into a list of other providers. 
      // more than one interceptor, but  be able to refer to all interceptors as a single entity.
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
