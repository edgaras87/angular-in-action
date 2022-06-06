import { Component, OnInit } from '@angular/core';
import { TdLoadingService } from '@covalent/core';
import { Invoice } from 'app/services/invoice';
import { InvoicesService } from 'app/services/invoices.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoices: Invoice[];

  constructor(
    private loadingService: TdLoadingService,
    private invoicesService: InvoicesService) { }

  ngOnInit() {
    this.loadingService.register('invoices');
    this.invoicesService.query<Array<Invoice>>({sort: 'created', order: 'desc'})
      .subscribe(invoices => {
        this.invoices = invoices;
        this.loadingService.resolve('invoices');
      });
  }

}
