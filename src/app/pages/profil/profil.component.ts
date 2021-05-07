import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserFieldLock } from 'src/app/enum/lock.objects';
import { IModal } from 'src/app/interfaces/modal';
import { IUser } from 'src/app/interfaces/user';
import { HealthAgApiService } from 'src/app/services/health-ag-api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit, AfterViewInit {

  userForm: IUser;

  constructor(private userService: UserService, private service: HealthAgApiService) {

  }

  switchDigitalInvoices(value: boolean) {
    if (this.userForm.sendInvoicesDigitally && value) {
      this.userForm.sendInvoicesDigitally = false;

      this.service.updateUser(this.userForm, UserFieldLock.INVOICE_DIGITAL_ONLY).subscribe(resp => {
        console.log(resp);
        this.getUser();
      });
    } else {
      this.userForm.sendInvoicesDigitally = true;
      this.service.updateUser(this.userForm, UserFieldLock.INVOICE_DIGITAL_ONLY).subscribe(resp => {
        console.log(resp);
        this.getUser();
      });
    }
  }

  getUser() {
    this.service.getUser().subscribe((resp: IUser) => {
      console.log(resp);
      this.userService._user = resp;
      this.userForm = resp;
    });
  }

  openNameModal(component: IModal) {
    component.openModal();
  }

  ngOnInit(): void {
    this.getUser();
  }

  ngAfterViewInit(): void {
  }

}
