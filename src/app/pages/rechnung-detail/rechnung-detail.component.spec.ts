import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnungDetailComponent } from './rechnung-detail.component';

describe('RechnungDetailComponent', () => {
  let component: RechnungDetailComponent;
  let fixture: ComponentFixture<RechnungDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechnungDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechnungDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
