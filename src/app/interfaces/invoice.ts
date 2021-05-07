import { PaymentState } from '../enum/payment.state';
import { IOffice } from './offices';
import { IPaymentPlan } from './payment-plan';

/**
 * @param invoicePlan Optional
 */
export interface IInvoice {
  invoiceId?: string | number;
  recipientNumber: string;
  patientName: string;
  invoiceNo: string | number;
  invoiceTotal: number;
  invoiceDueDate: Date;
  invoiceCreateDate: Date;
  installmentDone?: number;
  installmentCurrent?: number;
  installRemaining?: number;
  invoiceDocumentId: string | number;
  invoiceStatus: PaymentState;
  invoicePlan?: IPaymentPlan;
  durationInMonths: number;
  invoiceDeferralPayment?: boolean;
  office: IOffice;
}

