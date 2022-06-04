import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';
import { Customer } from 'app/services/customer';
import { CustomersService } from 'app/services/customers.service';
import { Invoice } from 'app/services/invoice';
import { InvoicesService } from 'app/services/invoices.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm: FormGroup;
  invoice: Invoice;
  customer: Customer;
  customers: Customer[];
  total: number = 0;

  constructor(
    private loadingService: TdLoadingService,
    private invoicesService: InvoicesService,
    private router: Router,
    private dialogService: TdDialogService,
    private customersService: CustomersService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
      this.invoiceForm = formBuilder.group({
        id: [''],
        service: [''],
        customerId: [''],
        rate: [''],
        hours: [''],
        date: [''],
        paid: ['']
      });
    }

  ngOnInit() {
    this.loadingService.register('invoice');
    this.loadingService.register('customers');

    this.customersService.query<Array<Customer>>().subscribe(customers => {
      this.customers = customers;
      this.loadingService.resolve('customers');
    });

    this.route.params.map((params: Params) => params.invoiceId).subscribe(invoiceId => {
      if(invoiceId) {
        this.invoicesService.get<Invoice>(invoiceId).subscribe(invoice => {
          this.invoiceForm.setValue(invoice);
          this.invoice = invoice;
          this.loadingService.resolve('invoice');
        });
      } else {
        this.invoice = new Invoice();
        this.loadingService.resolve('invoice');
      }
    });

    Observable.combineLatest(
      this.invoiceForm.get('rate').valueChanges,
      this.invoiceForm.get('hours').valueChanges
    ).subscribe(([rate = 0, hours = 0]) => {
      this.total = rate * hours;
    });

  }

  save() {
    if(this.invoice.id) {
      this.invoicesService.update<Invoice>(this.invoice.id, this.invoiceForm.value).subscribe(response => {
        this.viewInvoice(response.id);
      })
    } else {
      this.invoicesService.create<Invoice>(this.invoiceForm.value).subscribe(response => {
        this.viewInvoice(response.id);
      });
    }
  }

  delete() {
    this.dialogService.openConfirm({
      message: 'Are you sure you want to delete this invoice',
      title: 'Confirm',
      acceptButton: 'Delete'
    }).afterClosed().subscribe((accept: boolean) => {
      if(accept) {
        this.loadingService.register('invoice');
        this.invoicesService.delete(this.invoice.id).subscribe(response => {
          this.loadingService.resolve('invoice');
          this.invoice.id = null;
          this.cancel()
        });
      }
    });
  }

  cancel() {
    if(this.invoice.id) {
      this.router.navigate(['/invoices', this.invoice.id]);
    } else {
      this.router.navigateByUrl('/invoices');
    }
  }

  private viewInvoice(id: number) {
    this.router.navigate(['/invoices', id]);
  }

}
