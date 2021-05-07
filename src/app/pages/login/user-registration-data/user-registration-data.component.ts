import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserRegistration } from 'src/app/interfaces/user-registration';
import { HealthAgApiService } from 'src/app/services/health-ag-api.service';

@Component({
  selector: 'app-user-registration-data',
  templateUrl: './user-registration-data.component.html',
  styleUrls: ['./user-registration-data.component.scss']
})
export class UserRegistrationDataComponent implements OnInit {

  constructor(private service: HealthAgApiService, private router: Router) { }

  ngOnInit(): void {
  }

  createRegistrationRequest(userRegistration: IUserRegistration) {
    if (userRegistration.termsAndConditions && userRegistration.dataPrivacy) {

      const { dataPrivacy, termsAndConditions, email } = userRegistration;
      const userRegisterObject: IUserRegistration = {
        dataPrivacy,
        invoiceNo: sessionStorage.getItem('INVOICE_NO'),
        termsAndConditions,
        email
      };

      console.log(userRegisterObject);

      if (userRegisterObject.invoiceNo.length <= 0) {
        return;
      }

      this.service.triggerRegistrationRequest(userRegisterObject).subscribe(() => {
        console.log('Success!');
        this.router.navigate(['/register/step-3']);
      });

    }
  }

}
