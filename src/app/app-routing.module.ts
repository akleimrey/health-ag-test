import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GemeinsameratenzahlungComponent } from './pages/gemeinsameratenzahlung/gemeinsameratenzahlung.component';
import { HilfeComponent } from './pages/hilfe/hilfe.component';
import { HomeComponent } from './pages/home/home.component';
import { UserRegistrationConfirmComponent } from './pages/login/user-registration-confirm/user-registration-confirm.component';
import { UserRegistrationDataComponent } from './pages/login/user-registration-data/user-registration-data.component';
import { UserRegistrationEmailComponent } from './pages/login/user-registration-email/user-registration-email.component';
import { UserRegistrationComponent } from './pages/login/user-registration/user-registration.component';
import { EditAddressComponent } from './pages/profil/profil-unterseiten/edit-address/edit-address.component';
import { EditBankaccountComponent } from './pages/profil/profil-unterseiten/edit-bankaccount/edit-bankaccount.component';
import { PaymentDebitConfirmationSmComponent } from './pages/profil/profil-unterseiten/edit-bankaccount/payment-debit-confirmation-sm/payment-debit-confirmation-sm.component';
import { PaymentDebitSummaryComponent } from './pages/profil/profil-unterseiten/edit-bankaccount/payment-debit-summary/payment-debit-summary.component';
import { EditBirthdateComponent } from './pages/profil/profil-unterseiten/edit-birthdate/edit-birthdate.component';
import { EditConfirmationComponent } from './pages/profil/profil-unterseiten/edit-confirmation/edit-confirmation.component';
import { EditDisableAccountComponent } from './pages/profil/profil-unterseiten/edit-disable-account/edit-disable-account.component';
import { EditEmailComponent } from './pages/profil/profil-unterseiten/edit-email/edit-email.component';
import { EditPasswordComponent } from './pages/profil/profil-unterseiten/edit-password/edit-password.component';
import { EditPhoneNoComponent } from './pages/profil/profil-unterseiten/edit-phone-no/edit-phone-no.component';
import { EditSecurityComponent } from './pages/profil/profil-unterseiten/edit-security/edit-security.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { RechnungDetailComponent } from './pages/rechnung-detail/rechnung-detail.component';
import { RechnungenComponent } from './pages/rechnungen/rechnungen.component';
import { PaymentDebitConfirmationComponent } from './pages/vorzeitige-abloesung/payment-debit-confirmation/payment-debit-confirmation.component';
import { PaymentDebitComponent } from './pages/vorzeitige-abloesung/payment-debit/payment-debit.component';
import { SelectDateComponent } from './pages/vorzeitige-abloesung/select-date/select-date.component';
import { VorzeitigeAbloesungComponent } from './pages/vorzeitige-abloesung/vorzeitige-abloesung.component';
import { ZahlungAufschubComponent } from './pages/zahlung-aufschub/zahlung-aufschub.component';
import { RechnungDetailDataComponent } from './pages/rechnung-detail-data/rechnung-detail-data.component';
import { RechnungReqCopyComponent } from './pages/rechnung-req-copy/rechnung-req-copy.component';
import { LanguageResolverService } from './services/language-resolver.service';
import { FilterComponent } from './pages/filter/filter.component';
import { ErstattungComponent } from './pages/hilfe/erstattung/erstattung.component';
import { DownloadsComponent } from './pages/hilfe/downloads/downloads.component';
import { FaqComponent } from './pages/hilfe/faq/faq.component';
import { InvoiceConfirmationComponent } from './pages/invoice-confirmation/invoice-confirmation.component';
import { InvoiceConfirmationDetailsComponent } from './pages/invoice-confirmation-details/invoice-confirmation-details.component';
import { InvoiceConfirmationDateComponent } from './pages/invoice-confirmation-date/invoice-confirmation-date.component';
import { InvoiceConfirmationDebitComponent } from './pages/invoice-confirmation-debit/invoice-confirmation-debit.component';
import { InvoiceConfirmationSummaryComponent } from './pages/invoice-confirmation-summary/invoice-confirmation-summary.component';
import { EditDeactivateComponent } from './pages/profil/profil-unterseiten/edit-deactivate/edit-deactivate.component';
import { EditSuccessComponent } from './pages/profil/profil-unterseiten/edit-success/edit-success.component';
import { RatenzahlungFlyerComponent } from './pages/hilfe/downloads/ratenzahlung-flyer/ratenzahlung-flyer.component';
import { EinwilligungsErklaerungComponent } from './pages/hilfe/downloads/einwilligungs-erklaerung/einwilligungs-erklaerung.component';
import { ErstattungMainComponent } from './pages/hilfe/erstattung/erstattung-main/erstattung-main.component';
import { StrittigeErstattungComponent } from './pages/hilfe/erstattung/erstattung-main/strittige-erstattung/strittige-erstattung.component';
import { LeistungFaktorComponent } from './pages/hilfe/erstattung/erstattung-main/leistung-faktor/leistung-faktor.component';
import { ZahntechnischeLeistungenComponent } from './pages/hilfe/erstattung/erstattung-main/zahntechnische-leistungen/zahntechnische-leistungen.component';
import { BeihilfeAnaesthetikumComponent } from './pages/hilfe/erstattung/erstattung-main/beihilfe-anaesthetikum/beihilfe-anaesthetikum.component';
import { BeihilfeAufwendungenComponent } from './pages/hilfe/erstattung/erstattung-main/beihilfe-aufwendungen/beihilfe-aufwendungen.component';
import { AblehnungKostenPlanComponent } from './pages/hilfe/erstattung/erstattung-main/ablehnung-kosten-plan/ablehnung-kosten-plan.component';
import { SplashScreenComponent } from './pages/mobile/splash-screen/splash-screen.component';
import { PreWelcomeComponent } from './pages/mobile/pre-welcome/pre-welcome.component';



const routes: Routes = [
  { path: '', data: { animation: 'home' }, component: HomeComponent },
  { path: 'splash', data: { animation: 'splash' }, component: SplashScreenComponent },
  { path: 'pre-welcome', data: { animation: 'welcome' }, component: PreWelcomeComponent },
  {
    path: 'rechnungen', data: { animation: 'rechnung' }, children: [
      { path: '', data: { animation: 'rechnung' }, component: RechnungenComponent },
      {
        path: 'rechnung-detail',
        data: { animation: 'rechnung' },
        component: RechnungDetailComponent,
        resolve: { ngx_translate: LanguageResolverService }
      },
      { path: 'rechnung-datei', data: { animation: 'rechnung' }, component: RechnungDetailDataComponent },
      { path: 'rechnung-option', data: { animation: 'rechnung' }, component: RechnungReqCopyComponent },
      { path: 'zahlung-aufschub', data: { animation: 'rechnung' }, component: ZahlungAufschubComponent },
      { path: 'rechnung-filter', data: { animation: 'rechnung' }, component: FilterComponent },
      {
        path: 'abloesung', component: VorzeitigeAbloesungComponent, children: [
          { path: 'datum', component: SelectDateComponent },
          { path: 'bezahlung', component: PaymentDebitComponent },
          { path: 'bezahlung/agreement', component: PaymentDebitConfirmationComponent },
        ]
      },
    ]
  },
  {
    path: 'login', loadChildren: () => import('./pages/login/login-routing.module').then(m => m.LoginRoutingModule)
  },
  {
    path: 'register', data: { animation: 'rechnung' }, children: [
      { path: '', component: UserRegistrationComponent }, // Schritt 1
      { path: 'step-2', component: UserRegistrationDataComponent }, // Schritt 2
      { path: 'step-3', component: UserRegistrationEmailComponent }, // Schritt 3
      { path: 'step-4', component: UserRegistrationConfirmComponent }, // Schritt 4
    ]
  },
  {
    path: 'hilfe', data: { animation: 'hilfe' }, children: [
      { path: '', component: HilfeComponent },
      {
        path: 'erstattung', children: [
          { path: '', component: ErstattungComponent },
          {
            path: 'main', children: [
              { path: '', component: ErstattungMainComponent },
              { path: '1', component: StrittigeErstattungComponent },
              { path: '2', component: LeistungFaktorComponent },
              { path: '3', component: ZahntechnischeLeistungenComponent },
              { path: '4', component: BeihilfeAnaesthetikumComponent },
              { path: '5', component: BeihilfeAufwendungenComponent },
              { path: '6', component: AblehnungKostenPlanComponent },
            ]
          }
        ]
      },
      {
        path: 'downloads', data: { animation: 'downloads' }, children: [
          { path: '', component: DownloadsComponent },
          { path: 'ratenzahlung-flyer', component: RatenzahlungFlyerComponent },
          { path: 'einwilligungserklaerung', component: EinwilligungsErklaerungComponent }
        ]
      },
      { path: 'faq', data: { animation: 'faq' }, component: FaqComponent },
    ]
  },
  {
    path: 'erstattungsservice', children: [
      { path: '', component: ErstattungComponent },
    ]
  },
  {
    path: 'postfach',
    data: { animation: 'postfach' },
    loadChildren: () => import('./pages/postfach/postfach-routing.module').then(m => m.PostfachRoutingModule)
  },
  {
    path: 'profil', data: { animation: 'profil' }, children: [
      { path: '', component: ProfilComponent },
      { path: 'edit/address', component: EditAddressComponent },
      {
        path: 'edit/bankaccount', children: [
          { path: '', component: EditBankaccountComponent },
          { path: 'agreement', component: PaymentDebitConfirmationSmComponent },
          { path: 'summary', component: PaymentDebitSummaryComponent }
        ]
      },
      { path: 'edit/birthday', component: EditBirthdateComponent },
      { path: 'edit/password', component: EditPasswordComponent },
      { path: 'edit/security', component: EditSecurityComponent },
      { path: 'edit/phone', component: EditPhoneNoComponent },
      { path: 'edit/email', component: EditEmailComponent },
      { path: 'edit/confirm', component: EditConfirmationComponent },
      { path: 'edit/disable', component: EditDisableAccountComponent },
      { path: 'edit/birthdate', component: EditBirthdateComponent },
      { path: 'edit/deactivate', component: EditDeactivateComponent },
      { path: 'edit/success', component: EditSuccessComponent },
    ]
  },
  {
    path: 'ratenzahlung', children: [
      { path: '', component: GemeinsameratenzahlungComponent },
      { path: 'details', component: InvoiceConfirmationDetailsComponent },
      { path: 'invoice-date', component: InvoiceConfirmationDateComponent },
      { path: 'debit-confirm', component: InvoiceConfirmationDebitComponent },
      { path: 'summary', component: InvoiceConfirmationSummaryComponent },
      { path: 'complete', component: InvoiceConfirmationComponent },
      { path: '**', redirectTo: 'ratenzahlung' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
