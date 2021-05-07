import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserFieldLock } from 'src/app/enum/lock.objects';
import { IBankInformation } from 'src/app/interfaces/bank-information';
import { EditForm } from 'src/app/interfaces/edit-form';
import { HealthAgApiService } from 'src/app/services/health-ag-api.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-edit-bankaccount',
  templateUrl: './edit-bankaccount.component.html',
  styles: [
  ]
})
export class EditBankaccountComponent implements OnInit, EditForm {

  editBankaccountForm: FormGroup;

  constructor(private builder: FormBuilder, private userService: UserService , private healtAgApiService: HealthAgApiService) {
    this.editBankaccountForm = this.builder.group({
      accountHolder: [userService?._user?.bankInformation?.accountHolder ? userService._user.bankInformation.accountHolder : ''],
      iban: [userService?._user?.bankInformation?.iban ?
        userService._user.bankInformation.iban : ''],
      bic: [userService?._user?.bankInformation?.bic ? userService._user.bankInformation.bic : ''],
      mandateGranted: [true]
    });
  }

  saveChanges(formValue?: IBankInformation) {

    console.log(formValue);

    this.userService._user.bankInformation = Object.assign({}, formValue);
    this.healtAgApiService.updateUser(this.userService._user, UserFieldLock.BANK_INFORMATION).subscribe(resp => {
      console.log(resp);
    });
  }

  ngOnInit(): void {
  }

}
