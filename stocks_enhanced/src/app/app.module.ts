import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StocksService } from './services/stocks.service';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AppRoutes } from './app.routes';
import { CardTypeDirective } from './directives/card-type.directive';
import { DelayDirective } from './directives/delay.directive';
import { ChangePipe } from './pipes/change.pipe';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
    CardTypeDirective,
    DelayDirective,
    ChangePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutes
  ],
  providers: [
    StocksService,
    CurrencyPipe,
    PercentPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
