import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationConfirmComponent } from './user-registration-confirm.component';

describe('UserRegistrationConfirmComponent', () => {
  let component: UserRegistrationConfirmComponent;
  let fixture: ComponentFixture<UserRegistrationConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
