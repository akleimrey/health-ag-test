import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErstattungMainComponent } from './erstattung-main.component';

describe('ErstattungMainComponent', () => {
  let component: ErstattungMainComponent;
  let fixture: ComponentFixture<ErstattungMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErstattungMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErstattungMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
