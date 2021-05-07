import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeactivateComponent } from './edit-deactivate.component';

describe('EditDeactivateComponent', () => {
  let component: EditDeactivateComponent;
  let fixture: ComponentFixture<EditDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
