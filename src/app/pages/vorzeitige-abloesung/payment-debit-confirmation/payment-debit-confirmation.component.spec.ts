import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDebitConfirmationComponent } from './payment-debit-confirmation.component';

describe('PaymentDebitConfirmationComponent', () => {
  let component: PaymentDebitConfirmationComponent;
  let fixture: ComponentFixture<PaymentDebitConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDebitConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDebitConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
