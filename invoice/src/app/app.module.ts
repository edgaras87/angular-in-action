import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CovalentLayoutModule, CovalentLoadingModule, CovalentStepsModule } from '@covalent/core';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdIconModule,
  MdListModule,
  MdButtonModule
} from '@angular/material';
import { CustomersService } from './services/customers.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';

export const ROUTES: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:customerId', component: CustomerComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    HttpClientModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentLoadingModule,
    MdButtonModule,
    MdIconModule,
    MdListModule
  ],
  providers: [
    CustomersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
