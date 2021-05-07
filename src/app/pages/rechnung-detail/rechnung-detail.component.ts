import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { Subject } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { IInvoice } from 'src/app/interfaces/invoice';
import { FileDownloadService } from 'src/app/services/file-download.service';
import { HealthAgApiService } from 'src/app/services/health-ag-api.service';

@Component({
  selector: 'app-rechnung-detail',
  templateUrl: './rechnung-detail.component.html',
})
export class RechnungDetailComponent implements OnInit, AfterViewInit {

  private paymentSubject: Subject<IInvoice> = new Subject<IInvoice>();
  private languageData: any;

  minMonths = 2;
  maxMonths = 72;
  currentValue = 40;

  invoice: IInvoice;
  recentInvoiceModel: Array<IInvoice> = [];
  templateInvoicePaymentState: string;

  constructor(
    private location: Location,
    private actr: ActivatedRoute,
    private api: HealthAgApiService,
    private downloadService: FileDownloadService
  ) {

    this.actr.data.pipe(concatMap((resolvedLanguageData: any) => {
      console.log(resolvedLanguageData.ngx_translate.rechnungen);

      this.languageData = resolvedLanguageData.ngx_translate.rechnungen.rechnung_detail;

      return this.paymentSubject;
    })).subscribe(($invoice: any) => {
      this.recentInvoiceModel = [...new Array($invoice)];

      if (this.recentInvoiceModel[0]?.invoicePlan?.invoices.length > 0) {
        const delayInMilliseconds = 500;
        setTimeout(() => {
          this.calculatePaymentParticles();
        }, delayInMilliseconds);
      }
    });
  }

  downloadInvoicePdfData(): void {
    this.api.invoicePdf.subscribe((invoiceFile: any) => {
      this.downloadService.downloadPdf(invoiceFile.body.documentContentB64);
    });
  }

  calculatePaymentParticles(): void {
    const paymentParticles = document.querySelectorAll('div.paymentParticle');

    const { invoiceTotal, installmentCurrent, installmentDone } = this.recentInvoiceModel[0];
    const segmentPercentagePerPayment = (paymentParticles.length / (invoiceTotal / installmentCurrent));
    const segments = (installmentDone / installmentCurrent) * segmentPercentagePerPayment;

    let delay = 500;

    for (let index = 0; index < Math.round(segments); index++) {
      const factorIncrease = 3.5;
      setTimeout(() => {
        paymentParticles[index].classList.add('paymentParticlePaid');
      }, Math.round(delay));
      delay = delay + (index === 0 ? factorIncrease / 2 : index * factorIncrease);
    }

    setTimeout(() => {
      paymentParticles[document.querySelectorAll('div.paymentParticle.paymentParticlePaid').length]
        .classList.add('paymentParticleActive');
    }, delay);

    const percentagePaid = (installmentDone / invoiceTotal) * 100;

    if (percentagePaid <= 20) {
      this.templateInvoicePaymentState = this.languageData.percentagePaid_0to20;
    } else if (percentagePaid > 20 && percentagePaid < 50) {
      this.templateInvoicePaymentState = this.languageData.percentagePaid_20to49;
    } else if (percentagePaid >= 50 && percentagePaid < 60) {
      this.templateInvoicePaymentState = this.languageData.percentagePaid_50to59;
    } else if (percentagePaid >= 60 && percentagePaid <= 90) {
      this.templateInvoicePaymentState = this.languageData.percentagePaid_60to90;
    } else if (percentagePaid >= 100) {
      this.templateInvoicePaymentState = this.languageData.percentagePaid_100;
    }
  }

  returnValues(event: any) {
    console.log(event);
    this.currentValue = event;
  }

  ngAfterViewInit(): void {
    // Angular Callback der dann aktiv wird, wenn die View verfügbar ist. Siehe Angular Life-Cycles
    this.addActiveTabClickListener();
  }

  public doesInvoiceHavePaymentPlan(): boolean {
    return this.invoice?.invoicePlan?.invoices !== undefined ? true : false;
  }

  ngOnInit(): void {
    // Angular callback, when die Applikation live ist, was aber NICHT bedeutet, dass das Projekt bereits sichtbar ist
    this.invoice = this.location.getState() as IInvoice;
    this.paymentSubject.next(this.invoice);


    $(document).ready(function () {
      $("#paymentMethodSwitchCheck").change(function () {
        $('#choosePaymentMethodSwitch h3').toggleClass('activeSwitchText')

        if ($('#payPerLastschrift').css('display') == 'none') {
          $('#payPerLastschrift').css('display', 'block');
          $('#payNowForm').css('display', 'none');
        }
        else {
          $('#payPerLastschrift').css('display', 'none');
          $('#payNowForm').css('display', 'block');
        }

      });
    });


  }

  addActiveTabClickListener(): void {
    $('div.paymentTab').on('click', (element1) => {
      $('div.paymentTab').each((_INDEX, element2) => {
        $(element2).removeClass('active');
      });
      $(element1.target).addClass('active');
      const elementToShow = $(element1.target).data('tabcontent');
      // console.log(element1);
      $('div.paymentTab').each(() => {
        $('.tabContent').hide();
      });
      $('#' + elementToShow).show();
    });
  }

}
