import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceConfirmationSummaryComponent } from './invoice-confirmation-summary.component';

describe('InvoiceConfirmationSummaryComponent', () => {
  let component: InvoiceConfirmationSummaryComponent;
  let fixture: ComponentFixture<InvoiceConfirmationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceConfirmationSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceConfirmationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
