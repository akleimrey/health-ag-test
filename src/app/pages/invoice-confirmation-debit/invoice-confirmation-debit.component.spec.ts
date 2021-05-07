import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceConfirmationDebitComponent } from './invoice-confirmation-debit.component';

describe('InvoiceConfirmationDebitComponent', () => {
  let component: InvoiceConfirmationDebitComponent;
  let fixture: ComponentFixture<InvoiceConfirmationDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceConfirmationDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceConfirmationDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
