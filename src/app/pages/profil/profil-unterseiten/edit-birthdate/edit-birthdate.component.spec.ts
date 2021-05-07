import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBirthdateComponent } from './edit-birthdate.component';

describe('EditBirthdateComponent', () => {
  let component: EditBirthdateComponent;
  let fixture: ComponentFixture<EditBirthdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBirthdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBirthdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
