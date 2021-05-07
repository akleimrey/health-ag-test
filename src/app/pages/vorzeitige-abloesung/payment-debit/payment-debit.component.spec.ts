import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDebitComponent } from './payment-debit.component';

describe('PaymentDebitComponent', () => {
  let component: PaymentDebitComponent;
  let fixture: ComponentFixture<PaymentDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
