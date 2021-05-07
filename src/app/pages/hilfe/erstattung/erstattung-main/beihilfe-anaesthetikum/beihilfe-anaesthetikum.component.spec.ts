import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeihilfeAnaesthetikumComponent } from './beihilfe-anaesthetikum.component';

describe('BeihilfeAnaesthetikumComponent', () => {
  let component: BeihilfeAnaesthetikumComponent;
  let fixture: ComponentFixture<BeihilfeAnaesthetikumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeihilfeAnaesthetikumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeihilfeAnaesthetikumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
