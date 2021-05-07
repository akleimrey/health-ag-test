import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { IInvoice } from 'src/app/interfaces/invoice';
import { BrowserStorageService } from 'src/app/services/browser-storage.service';
import { HealthAgApiService } from 'src/app/services/health-ag-api.service';

@Component({
  selector: 'app-rechnungen',
  templateUrl: './rechnungen.component.html',
  styleUrls: ['./rechnungen.component.scss'],
})
export class RechnungenComponent implements OnInit, AfterViewInit {

  @ViewChild('filterInput', { static: true }) filterInput: ElementRef;

  filterValue: string;
  filterTabs: Array<any> = [];
  rechnungsArray: Array<IInvoice> = [];
  copyArray: Array<IInvoice> = [];

  constructor(private service: HealthAgApiService, private browserStorage: BrowserStorageService) {
  }

  ngOnInit() {
    this.transformFilterTabsAsArray(this.filterTabs);

    fromEvent(this.filterInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(900),
      distinctUntilChanged())
      .subscribe((value: string) => {
        console.log(`A value: ${value}`);
        if (value.trim().length <= 0) {
          // TODO Recover the original list
          this.copyArray = [...this.rechnungsArray];
        } else {
          this.copyArray = [...this.rechnungsArray.filter((invoice) => invoice.invoiceNo.toString().includes(value))];
        }
      });
  }

  ngAfterViewInit(): void {

    if (document.querySelector('.tag.pill-input')) {
      document.querySelector('#installmentList').classList.add('filterDisplayed');
    } else {
      document.querySelector('#installmentList').classList.remove('filterDisplayed');
    }

    this.triggerReceiveInvoices();
  }

  triggerReceiveInvoices() {

    const jwtToken = new JwtHelperService().decodeToken(this.service.token);

    if (jwtToken.registered) {
      this.service.triggerReceiveAllInvoicesForUser().subscribe(value => {
        console.log(value);
        this.rechnungsArray = [...this.rechnungsArray, ...value];
        this.copyArray = [...this.rechnungsArray];
      });
    } else {
      this.service.triggerReceiveInvoiceForInvoiceUser().subscribe(value => {
        console.log(value);
        this.rechnungsArray = [...this.rechnungsArray, value];
        this.copyArray = [...this.rechnungsArray];
      });
    }
  }

  getFirstItem() {
    return this.filterTabs?.[0]?.[1];
  }

  getSecondItem() {
    return this.filterTabs?.[1]?.[1];
  }

  getThirdItem() {
    return this.filterTabs?.[2]?.[1];
  }

  transformFilterTabsAsArray(arrayReference: any[]) {
    if (this.browserStorage.getSessionStorageKeyValue(this.browserStorage.filterKey)) {
      arrayReference.push(...Object.entries(JSON.parse(this.browserStorage.getSessionStorageKeyValue(this.browserStorage.filterKey))));
    }
  }

}
