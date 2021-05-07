import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdFirstChangeComponent } from './pwd-first-change.component';

describe('PwdFirstChangeComponent', () => {
  let component: PwdFirstChangeComponent;
  let fixture: ComponentFixture<PwdFirstChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwdFirstChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdFirstChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
