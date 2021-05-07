import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RechnungComponent } from './components/rechnung/rechnung.component';
import { RechnungenComponent } from './pages/rechnungen/rechnungen.component';
import { PostfachComponent } from './pages/postfach/postfach.component';
import { HilfeComponent } from './pages/hilfe/hilfe.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { RechnungDetailComponent } from './pages/rechnung-detail/rechnung-detail.component';
import { EuroCurrencyPipe } from './pipes/euro-currency.pipe';
import { GemeinsameratenzahlungComponent } from './pages/gemeinsameratenzahlung/gemeinsameratenzahlung.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Translation Modules
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PhonePipe } from './pipes/phone.pipe';
import { CountDirective } from './directives/count.directive';
import { VorzeitigeAbloesungComponent } from './pages/vorzeitige-abloesung/vorzeitige-abloesung.component';
import { PostfachDetailComponent } from './pages/postfach/postfach-detail/postfach-detail.component';
import { MarkItemsDirective } from './directives/mark-items.directive';
import { EditAddressComponent } from './pages/profil/profil-unterseiten/edit-address/edit-address.component';
import { EditBankaccountComponent } from './pages/profil/profil-unterseiten/edit-bankaccount/edit-bankaccount.component';
import { EditPasswordComponent } from './pages/profil/profil-unterseiten/edit-password/edit-password.component';
import { EditSecurityComponent } from './pages/profil/profil-unterseiten/edit-security/edit-security.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { SelectDateComponent } from './pages/vorzeitige-abloesung/select-date/select-date.component';
import { PaymentDebitComponent } from './pages/vorzeitige-abloesung/payment-debit/payment-debit.component';
import { PaymentDebitConfirmationComponent } from './pages/vorzeitige-abloesung/payment-debit-confirmation/payment-debit-confirmation.component';
import { Ng9OdometerModule } from 'ng9-odometer';
import { EditEmailComponent } from './pages/profil/profil-unterseiten/edit-email/edit-email.component';
import { EditPhoneNoComponent } from './pages/profil/profil-unterseiten/edit-phone-no/edit-phone-no.component';
import { EditConfirmationComponent } from './pages/profil/profil-unterseiten/edit-confirmation/edit-confirmation.component';
import { PaymentDebitConfirmationSmComponent } from './pages/profil/profil-unterseiten/edit-bankaccount/payment-debit-confirmation-sm/payment-debit-confirmation-sm.component';
import { PaymentDebitSummaryComponent } from './pages/profil/profil-unterseiten/edit-bankaccount/payment-debit-summary/payment-debit-summary.component';
import { GesendetComponent } from './pages/postfach/gesendet/gesendet.component';
import { PostfachEingangComponent } from './pages/postfach/postfach-eingang/postfach-eingang.component';
import { PostfachArchivComponent } from './pages/postfach/postfach-archiv/postfach-archiv.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { PwdRecoveryComponent } from './pages/login/pwd-recovery/pwd-recovery.component';
import { PwdConfirmComponent } from './pages/login/pwd-confirm/pwd-confirm.component';
import { UserRegistrationComponent } from './pages/login/user-registration/user-registration.component';
import { UserRegistrationConfirmComponent } from './pages/login/user-registration-confirm/user-registration-confirm.component';
import { UserRegistrationEmailComponent } from './pages/login/user-registration-email/user-registration-email.component';
import { UserRegistrationDataComponent } from './pages/login/user-registration-data/user-registration-data.component';
import { ForgotEmailComponent } from './pages/login/forgot-email/forgot-email.component';
import { ReportViolationComponent } from './pages/login/report-violation/report-violation.component';
import { ModalComponent } from './components/modal/modal.component';
import { EditBirthdateComponent } from './pages/profil/profil-unterseiten/edit-birthdate/edit-birthdate.component';
import { EditDisableAccountComponent } from './pages/profil/profil-unterseiten/edit-disable-account/edit-disable-account.component';
import { ZahlungAufschubComponent } from './pages/zahlung-aufschub/zahlung-aufschub.component';
import { RechnungDetailDataComponent } from './pages/rechnung-detail-data/rechnung-detail-data.component';
import { RechnungReqCopyComponent } from './pages/rechnung-req-copy/rechnung-req-copy.component';
import { FilterComponent } from './pages/filter/filter.component';
import { PasswordInfoComponent } from './pages/login/password-info/password-info.component';
import { PwdFirstChangeComponent } from './pages/login/pwd-first-change/pwd-first-change.component';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';
import { ProgressComponent } from './components/progress/progress.component';
import { DndDirective } from './directives/dnd.directive';
import { AttachmentComponent } from './pages/postfach/attachment/attachment.component';
import { ContactComponent } from './pages/hilfe/contact/contact.component';
import { ErstattungComponent } from './pages/hilfe/erstattung/erstattung.component';
import { DownloadsComponent } from './pages/hilfe/downloads/downloads.component';
import { FaqComponent } from './pages/hilfe/faq/faq.component';
import { InvoiceConfirmationComponent } from './pages/invoice-confirmation/invoice-confirmation.component';
import { InvoiceConfirmationDetailsComponent } from './pages/invoice-confirmation-details/invoice-confirmation-details.component';
import { InvoiceConfirmationDateComponent } from './pages/invoice-confirmation-date/invoice-confirmation-date.component';
import { InvoiceConfirmationDebitComponent } from './pages/invoice-confirmation-debit/invoice-confirmation-debit.component';
import { InvoiceConfirmationSummaryComponent } from './pages/invoice-confirmation-summary/invoice-confirmation-summary.component';
import { EditSuccessComponent } from './pages/profil/profil-unterseiten/edit-success/edit-success.component';
import { EditDeactivateComponent } from './pages/profil/profil-unterseiten/edit-deactivate/edit-deactivate.component';
import { RatenzahlungFlyerComponent } from './pages/hilfe/downloads/ratenzahlung-flyer/ratenzahlung-flyer.component';
import { EinwilligungsErklaerungComponent } from './pages/hilfe/downloads/einwilligungs-erklaerung/einwilligungs-erklaerung.component';
import { PostfachNachrichtComponent } from './pages/postfach/postfach-nachricht/postfach-nachricht.component';
import { ErstattungMainComponent } from './pages/hilfe/erstattung/erstattung-main/erstattung-main.component';
import { AblehnungKostenPlanComponent } from './pages/hilfe/erstattung/erstattung-main/ablehnung-kosten-plan/ablehnung-kosten-plan.component';
import { BeihilfeAufwendungenComponent } from './pages/hilfe/erstattung/erstattung-main/beihilfe-aufwendungen/beihilfe-aufwendungen.component';
import { BeihilfeAnaesthetikumComponent } from './pages/hilfe/erstattung/erstattung-main/beihilfe-anaesthetikum/beihilfe-anaesthetikum.component';
import { ZahntechnischeLeistungenComponent } from './pages/hilfe/erstattung/erstattung-main/zahntechnische-leistungen/zahntechnische-leistungen.component';
import { LeistungFaktorComponent } from './pages/hilfe/erstattung/erstattung-main/leistung-faktor/leistung-faktor.component';
import { StrittigeErstattungComponent } from './pages/hilfe/erstattung/erstattung-main/strittige-erstattung/strittige-erstattung.component';
import { SplashScreenComponent } from './pages/mobile/splash-screen/splash-screen.component';
import { PreWelcomeComponent } from './pages/mobile/pre-welcome/pre-welcome.component';
import { MobileBarComponent } from './components/mobile-bar/mobile-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RechnungComponent,
    RechnungenComponent,
    PostfachComponent,
    HilfeComponent,
    ProfilComponent,
    RechnungDetailComponent,
    EuroCurrencyPipe,
    GemeinsameratenzahlungComponent,
    PhonePipe,
    CountDirective,
    VorzeitigeAbloesungComponent,
    PostfachDetailComponent,
    MarkItemsDirective,
    EditAddressComponent,
    EditBankaccountComponent,
    EditPasswordComponent,
    EditSecurityComponent,
    StepperComponent,
    SelectDateComponent,
    PaymentDebitComponent,
    PaymentDebitConfirmationComponent,
    EditEmailComponent,
    EditPhoneNoComponent,
    EditConfirmationComponent,
    PaymentDebitConfirmationSmComponent,
    PaymentDebitSummaryComponent,
    PostfachEingangComponent,
    PostfachArchivComponent,
    GesendetComponent,
    PwdRecoveryComponent,
    PwdConfirmComponent,
    UserRegistrationComponent,
    UserRegistrationConfirmComponent,
    UserRegistrationEmailComponent,
    UserRegistrationDataComponent,
    ForgotEmailComponent,
    ReportViolationComponent,
    ModalComponent,
    EditBirthdateComponent,
    EditDisableAccountComponent,
    ZahlungAufschubComponent,
    RechnungDetailDataComponent,
    RechnungReqCopyComponent,
    FilterComponent,
    PasswordInfoComponent,
    PwdFirstChangeComponent,
    UploadfileComponent,
    ProgressComponent,
    DndDirective,
    AttachmentComponent,
    ContactComponent,
    ErstattungComponent,
    DownloadsComponent,
    FaqComponent,
    InvoiceConfirmationComponent,
    InvoiceConfirmationDetailsComponent,
    InvoiceConfirmationDateComponent,
    InvoiceConfirmationDebitComponent,
    InvoiceConfirmationSummaryComponent,
    EditSuccessComponent,
    EditDeactivateComponent,
    RatenzahlungFlyerComponent,
    EinwilligungsErklaerungComponent,
    PostfachNachrichtComponent,
    ErstattungMainComponent,
    AblehnungKostenPlanComponent,
    BeihilfeAufwendungenComponent,
    BeihilfeAnaesthetikumComponent,
    ZahntechnischeLeistungenComponent,
    LeistungFaktorComponent,
    StrittigeErstattungComponent,
    SplashScreenComponent,
    PreWelcomeComponent,
    MobileBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng9OdometerModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
