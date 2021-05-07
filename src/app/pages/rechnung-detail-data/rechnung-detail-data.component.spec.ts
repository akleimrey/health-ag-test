import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnungDetailDataComponent } from './rechnung-detail-data.component';

describe('RechnungDetailDataComponent', () => {
  let component: RechnungDetailDataComponent;
  let fixture: ComponentFixture<RechnungDetailDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechnungDetailDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechnungDetailDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
