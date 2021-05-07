import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinwilligungsErklaerungComponent } from './einwilligungs-erklaerung.component';

describe('EinwilligungsErklaerungComponent', () => {
  let component: EinwilligungsErklaerungComponent;
  let fixture: ComponentFixture<EinwilligungsErklaerungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinwilligungsErklaerungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinwilligungsErklaerungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
