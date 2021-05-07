import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahlungAufschubComponent } from './zahlung-aufschub.component';

describe('ZahlungAufschubComponent', () => {
  let component: ZahlungAufschubComponent;
  let fixture: ComponentFixture<ZahlungAufschubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahlungAufschubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahlungAufschubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
