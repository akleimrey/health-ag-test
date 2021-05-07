import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemeinsameratenzahlungComponent } from './gemeinsameratenzahlung.component';

describe('GemeinsameratenzahlungComponent', () => {
  let component: GemeinsameratenzahlungComponent;
  let fixture: ComponentFixture<GemeinsameratenzahlungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemeinsameratenzahlungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GemeinsameratenzahlungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
