import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentState } from 'src/app/enum/payment.state';
import { Invoice } from 'src/app/interfaces/invoice';
import { EuroCurrencyPipe } from 'src/app/pipes/euro-currency.pipe';
import { RechnungComponent } from './rechnung.component';

describe('RechnungComponent', () => {
  let component: RechnungComponent;
  let fixture: ComponentFixture<RechnungComponent>;
  const rechnungE: Invoice =
    {
      invoiceStatus: PaymentState.IN_PROCESS,
      invoiceDate: new Date(),
      invoiceNumber: 7777777,
      invoiceSum: 100.00,
      officeName: 'Office',
      clientId: '324324',
      currency: '€',
      invoiceDocumentId: 21412414,
      officeAddress: 'Wickstraße 188',
      officePhoneNo: 3242879422439,
      officeWebPage: 'test.de'
    };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RechnungComponent, EuroCurrencyPipe], imports: [TranslateModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
