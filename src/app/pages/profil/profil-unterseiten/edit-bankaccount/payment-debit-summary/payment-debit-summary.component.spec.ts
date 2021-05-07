import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDebitSummaryComponent } from './payment-debit-summary.component';

describe('PaymentDebitSummaryComponent', () => {
  let component: PaymentDebitSummaryComponent;
  let fixture: ComponentFixture<PaymentDebitSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDebitSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDebitSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
