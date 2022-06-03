import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes } from '@angular/router';

import {
  MdButtonModule
} from '@angular/material';

export const ROUTES: Routes = [
  { path: 'customers', component: CustomersComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    CovalentLayoutModule,
    CovalentStepsModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
