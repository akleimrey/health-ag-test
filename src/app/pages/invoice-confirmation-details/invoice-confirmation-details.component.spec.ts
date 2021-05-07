import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceConfirmationDetailsComponent } from './invoice-confirmation-details.component';

describe('InvoiceConfirmationDetailsComponent', () => {
  let component: InvoiceConfirmationDetailsComponent;
  let fixture: ComponentFixture<InvoiceConfirmationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceConfirmationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceConfirmationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
