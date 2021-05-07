import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PaymentState } from 'src/app/enum/payment.state';
import { IInvoice } from 'src/app/interfaces/invoice';

@Component({
  selector: 'app-gemeinsameratenzahlung',
  templateUrl: './gemeinsameratenzahlung.component.html',
  styleUrls: ['./gemeinsameratenzahlung.component.scss']
})
export class GemeinsameratenzahlungComponent implements OnInit, AfterViewInit {

  invoice: IInvoice;

  minMonths = 2;
  maxMonths = 72;
  currentValue = 40;
  returnOptionSelect = () => {
    const tmpArray = [];
    for (let index = this.minMonths; index < this.maxMonths; index++) {
        tmpArray.push(index);
    }
    return tmpArray;
  }

  constructor() {

  }

  returnValues(event: any) {
    console.log(event);
    this.currentValue = event;
  }

  listenToDeselectItemsDirective(event: any) {
    console.log(event);
  }

  listenToSelectItemsDirective(event: any) {
    console.log(event);
  }

  ngAfterViewInit(): void {
    // Angular Callback der dann aktiv wird, wenn die View verfügbar ist. Siehe Angular Life-Cycles
    console.log('I come second');


    $('div.paymentTab').click(function () {
      $('div.paymentTab').each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active')
      var elementToShow = $(this).data('tabcontent');
      console.log(elementToShow)
      $('div.paymentTab').each(function () {
        $('.tabContent').hide();
      });
      $('#' + elementToShow).show();
    })
  }

  ngOnInit(): void {
  }

}
