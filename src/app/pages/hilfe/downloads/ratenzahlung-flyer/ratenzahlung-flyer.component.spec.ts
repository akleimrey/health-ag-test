import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatenzahlungFlyerComponent } from './ratenzahlung-flyer.component';

describe('RatenzahlungFlyerComponent', () => {
  let component: RatenzahlungFlyerComponent;
  let fixture: ComponentFixture<RatenzahlungFlyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatenzahlungFlyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatenzahlungFlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
