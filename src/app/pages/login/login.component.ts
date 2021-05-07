import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HealthAgApiService } from 'src/app/services/health-ag-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: HealthAgApiService){
  }

  ngOnInit() {

    $(document).ready(function () {
      $('#loginByAccountTab').click(function () {
        $(this).addClass('active')
        $('#loginByInvoiceTab').removeClass('active')
        $('#loginByInvoiceTabContent').hide();
        $('#loginByAccountTabContent').show();
      })

      $('#loginByInvoiceTab').click(function () {
        $(this).addClass('active')
        $('#loginByAccountTab').removeClass('active')
        $('#loginByInvoiceTabContent').show();
        $('#loginByAccountTabContent').hide();
      })
    });
  }

  loginViaInvoice(form: NgForm): void {
    this.service.triggerAuthenticationViaInvoice(form.value)
    .subscribe((resp: any) => {
      console.log(resp);
      localStorage.setItem('USER_TOKEN', resp.jwt);
      const helper = new JwtHelperService();
      console.log(helper.decodeToken(localStorage.getItem('USER_TOKEN')));
      sessionStorage.setItem('INVOICE_NO', form.value.username);
      this.router.navigate(['../register']);
    });
  }

  login(form: NgForm): void {
    this.service.triggerAuthentication(form.value)
    .subscribe((resp: any) => {
      console.log(resp);
      localStorage.setItem('USER_TOKEN', resp.jwt);
      const helper = new JwtHelperService();
      console.log(helper.decodeToken(localStorage.getItem('USER_TOKEN')));
      this.router.navigate(['/']);
    });
  }

}
