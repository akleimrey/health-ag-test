import { Component, Input, OnInit } from '@angular/core';
import { IInvoice } from 'src/app/interfaces/invoice';
// import * as $ from 'jquery';

@Component({
  selector: 'app-rechnung',
  templateUrl: './rechnung.component.html',
  styleUrls: ['./rechnung.component.scss'],
})
export class RechnungComponent implements OnInit {
  @Input() rechnung: IInvoice;

  constructor() { }

  ngOnInit() {
  }

  public getPaymentStatus(): string {
    return this.rechnung.invoiceStatus;
  }

  public doesInvoiceHavePaymentPlan(): boolean {
    return this.rechnung?.invoicePlan?.invoices !== undefined ? true : false;
  }

}
