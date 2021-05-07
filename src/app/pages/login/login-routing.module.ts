import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { PasswordInfoComponent } from './password-info/password-info.component';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';
import { PwdFirstChangeComponent } from './pwd-first-change/pwd-first-change.component';
import { PwdRecoveryComponent } from './pwd-recovery/pwd-recovery.component';
import { PwdConfirmComponent } from './pwd-confirm/pwd-confirm.component';
import { ReportViolationComponent } from './report-violation/report-violation.component';

const route: Routes = [{
  path: '', children: [
    { path: 'pwd-info', component: PasswordInfoComponent},
    { path: 'email-recovery', component: ForgotEmailComponent },
    { path: 'pwd-first-change', component: PwdFirstChangeComponent },
    { path: 'pwd-recovery', component: PwdRecoveryComponent },
    { path: 'pwd-confirm', component: PwdConfirmComponent },
    { path: 'pwd-violation', component: ReportViolationComponent },
    { path: '', component: LoginComponent },
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class LoginRoutingModule { }
