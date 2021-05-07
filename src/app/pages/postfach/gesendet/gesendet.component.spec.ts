import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesendetComponent } from './gesendet.component';

describe('GesendetComponent', () => {
  let component: GesendetComponent;
  let fixture: ComponentFixture<GesendetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesendetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GesendetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
