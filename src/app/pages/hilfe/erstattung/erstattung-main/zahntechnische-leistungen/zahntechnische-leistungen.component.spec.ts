import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahntechnischeLeistungenComponent } from './zahntechnische-leistungen.component';

describe('ZahntechnischeLeistungenComponent', () => {
  let component: ZahntechnischeLeistungenComponent;
  let fixture: ComponentFixture<ZahntechnischeLeistungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahntechnischeLeistungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahntechnischeLeistungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
