import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationEmailComponent } from './user-registration-email.component';

describe('UserRegistrationEmailComponent', () => {
  let component: UserRegistrationEmailComponent;
  let fixture: ComponentFixture<UserRegistrationEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
