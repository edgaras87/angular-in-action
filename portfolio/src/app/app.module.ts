import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AccountService } from './services/account.service';
import { StocksComponent } from './stocks/stocks.component';
import { InvestmentsComponent } from './investments/investments.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    InvestmentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClarityModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
