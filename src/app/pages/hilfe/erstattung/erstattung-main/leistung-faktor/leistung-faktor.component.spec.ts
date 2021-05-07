import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungFaktorComponent } from './leistung-faktor.component';

describe('LeistungFaktorComponent', () => {
  let component: LeistungFaktorComponent;
  let fixture: ComponentFixture<LeistungFaktorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeistungFaktorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeistungFaktorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
