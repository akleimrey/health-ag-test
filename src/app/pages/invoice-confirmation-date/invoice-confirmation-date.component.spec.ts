import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceConfirmationDateComponent } from './invoice-confirmation-date.component';

describe('InvoiceConfirmationDateComponent', () => {
  let component: InvoiceConfirmationDateComponent;
  let fixture: ComponentFixture<InvoiceConfirmationDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceConfirmationDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceConfirmationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
