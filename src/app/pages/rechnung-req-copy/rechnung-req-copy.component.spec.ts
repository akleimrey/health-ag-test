import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnungReqCopyComponent } from './rechnung-req-copy.component';

describe('RechnungReqCopyComponent', () => {
  let component: RechnungReqCopyComponent;
  let fixture: ComponentFixture<RechnungReqCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechnungReqCopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechnungReqCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
