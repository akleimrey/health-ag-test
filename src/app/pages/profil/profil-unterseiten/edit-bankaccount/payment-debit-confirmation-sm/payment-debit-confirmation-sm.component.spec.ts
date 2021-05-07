import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDebitConfirmationSmComponent } from './payment-debit-confirmation-sm.component';

describe('PaymentDebitConfirmationSmComponent', () => {
  let component: PaymentDebitConfirmationSmComponent;
  let fixture: ComponentFixture<PaymentDebitConfirmationSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDebitConfirmationSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDebitConfirmationSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
