import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AblehnungKostenPlanComponent } from './ablehnung-kosten-plan.component';

describe('AblehnungKostenPlanComponent', () => {
  let component: AblehnungKostenPlanComponent;
  let fixture: ComponentFixture<AblehnungKostenPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AblehnungKostenPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AblehnungKostenPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
