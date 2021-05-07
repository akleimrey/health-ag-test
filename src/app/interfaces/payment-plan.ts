export interface IPaymentPlan {

  paymentId?: number;
  invoices: Array<number | string>;
  durationInMonths: number;
  paymentPlanStart: Date;
  paymentPlanDue: Date;
  paymentAgreement: boolean;
  // Jahreszins
  annualRate: number;
  // Sollzinssatz
  targetRate: number;
}
