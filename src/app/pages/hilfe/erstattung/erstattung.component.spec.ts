import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErstattungComponent } from './erstattung.component';

describe('ErstattungComponent', () => {
  let component: ErstattungComponent;
  let fixture: ComponentFixture<ErstattungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErstattungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErstattungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
