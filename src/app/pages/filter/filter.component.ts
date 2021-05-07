import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaymentState } from 'src/app/enum/payment.state';
import { BrowserStorageService } from 'src/app/services/browser-storage.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterFormGroup: FormGroup;

  readonly ALL_INVOICES = 'ALL_INVOICES';
  readonly OVERDUE = PaymentState.OVERDUE;
  readonly PAID = PaymentState.PAID;
  readonly OPEN = PaymentState.OPEN;
  readonly IN_PROCESS = PaymentState.IN_PROCESS;

  readonly paymentStateNgForm = 'paymentState';
  readonly invoiceDateNgForm = 'invoiceDate';
  readonly patientsNgForm = 'patients';

  constructor(public formbuilder: FormBuilder, private browserStorage: BrowserStorageService) {
  }

  get formValue() {
    sessionStorage.setItem('invoiceFilter', JSON.stringify(this.filterFormGroup.value));
    return this.filterFormGroup.value;
  }

  ngOnInit(): void {
    this.filterFormGroup = this.createForm();
    this.subscribeFormChanges(this.filterFormGroup);
  }

  private subscribeFormChanges(filterFormGroup: FormGroup) {
    filterFormGroup.valueChanges.subscribe(formChanges => {
      this.browserStorage.storeKeyValueInSessionStorage(this.browserStorage.filterKey, JSON.stringify(formChanges));
    });
  }

  private createForm(): FormGroup {
    return this.formbuilder.group({
      paymentState: [''],
      invoiceDate: [''],
      patients: ['']
    });
  }
}
