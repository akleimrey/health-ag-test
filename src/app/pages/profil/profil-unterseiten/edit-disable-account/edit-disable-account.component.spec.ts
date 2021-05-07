import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDisableAccountComponent } from './edit-disable-account.component';

describe('EditDisableAccountComponent', () => {
  let component: EditDisableAccountComponent;
  let fixture: ComponentFixture<EditDisableAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDisableAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDisableAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
