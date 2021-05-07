import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserFieldLock } from 'src/app/enum/lock.objects';
import { IAddress } from 'src/app/interfaces/address';
import { EditForm } from 'src/app/interfaces/edit-form';
import { HealthAgApiService } from 'src/app/services/health-ag-api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styles: [
  ]
})
export class EditAddressComponent implements OnInit, EditForm {

  addressForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private healthAgApiService: HealthAgApiService) {
    this.addressForm = this.formBuilder.group({
      street: [this.userService._user?.address?.street ? this.userService._userAddress.street : ''],
      addition: [this.userService._user?.address?.addition ? this.userService._userAddress.addition : ''],
      city: [this.userService._user?.address?.city ? this.userService._userAddress.city : ''],
      postalCodecode: [this.userService._user?.address?.postalCodecode ? this.userService._userAddress.postalCodecode : ''],
      country: [{
        value: this.userService?._user?.address?.country ? this.userService._userAddress.country : 'Deutschland',
        disabled: false
      }],
    });
  }

  saveChanges(address: IAddress) {
    this.userService._userAddress = Object.assign({}, address);
    console.log(this.userService._user);
    this.healthAgApiService.updateUser(this.userService._user, UserFieldLock.ADDRESS).subscribe(resp => {
      console.log(resp);
    });
  }

  ngOnInit(): void {
  }

}
