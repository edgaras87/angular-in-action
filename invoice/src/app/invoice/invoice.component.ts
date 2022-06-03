import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { Customer } from 'app/services/customer';
import { CustomersService } from 'app/services/customers.service';
import { Invoice } from 'app/services/invoice';
import { InvoicesService } from 'app/services/invoices.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  
  invoice: Invoice;
  customer: Customer;

  constructor(
    private loadingService: TdLoadingService,
    private invoicesService: InvoicesService,
    private customersService: CustomersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadingService.register('invoice');
    this.route.params
      .map((params: Params) => params.invoiceId)
      .switchMap(invoiceId => this.invoicesService.get<Invoice>(invoiceId))
      .map(invoice => {
        this.invoice = invoice;
        return invoice.customerId;})
      .switchMap(custumerId => this.customersService.get<Customer>(custumerId))
      .subscribe(customer => {
        this.customer = customer;
        this.loadingService.resolve('invoice');
      });

  }












}
