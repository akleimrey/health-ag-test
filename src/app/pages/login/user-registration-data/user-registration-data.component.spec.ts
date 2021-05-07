import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationDataComponent } from './user-registration-data.component';

describe('UserRegistrationDataComponent', () => {
  let component: UserRegistrationDataComponent;
  let fixture: ComponentFixture<UserRegistrationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
