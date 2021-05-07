import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserFieldLock } from 'src/app/enum/lock.objects';
import { EditForm } from 'src/app/interfaces/edit-form';
import { HealthAgApiService } from 'src/app/services/health-ag-api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-phone-no',
  templateUrl: './edit-phone-no.component.html',
  styles: [
  ]
})
export class EditPhoneNoComponent implements OnInit, EditForm {

  phoneForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private healthAgApiService: HealthAgApiService) {
    this.phoneForm = this.formBuilder.group({
      phoneNumber: [this.userService?._user?.phoneNumber ? this.userService._user.phoneNumber : '' ]
    });
  }

  saveChanges(formValue?: string) {
    this.userService._user.phoneNumber = formValue;
    console.log(this.userService._user);
    this.healthAgApiService.updateUser(this.userService._user, UserFieldLock.PHONE_NO)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  ngOnInit(): void {
  }

}
