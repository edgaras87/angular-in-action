import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CovalentDialogsModule, CovalentLayoutModule, CovalentLoadingModule, CovalentStepsModule } from '@covalent/core';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdIconModule,
  MdListModule,
  MdButtonModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdSlideToggleModule,
  MdSelectModule
} from '@angular/material';

import { CustomersService } from './services/customers.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneDirective } from './validators/phone.directive';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoicesService } from './services/invoices.service';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { HoursDirective } from './validators/hours.directive';
import { HoursControlComponent } from './hours-control/hours-control.component';

export const ROUTES: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/create', component: CustomerFormComponent },
  { path: 'customers/:customerId', component: CustomerComponent },
  { path: 'customers/:customerId/edit', component: CustomerFormComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoices/create', component: InvoiceFormComponent },
  { path: 'invoices/:invoiceId', component: InvoiceComponent },
  { path: 'invoices/:invoiceId/edit', component: InvoiceFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'invoices' }

]
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerFormComponent,
    PhoneDirective,
    HoursDirective,
    InvoicesComponent,
    InvoiceComponent,
    InvoiceFormComponent,
    HoursControlComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentLoadingModule,
    CovalentDialogsModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSlideToggleModule,
    MdSelectModule
  ],
  providers: [
    CustomersService,
    InvoicesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
