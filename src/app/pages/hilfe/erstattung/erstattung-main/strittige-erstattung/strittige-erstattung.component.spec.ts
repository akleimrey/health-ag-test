import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrittigeErstattungComponent } from './strittige-erstattung.component';

describe('StrittigeErstattungComponent', () => {
  let component: StrittigeErstattungComponent;
  let fixture: ComponentFixture<StrittigeErstattungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrittigeErstattungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrittigeErstattungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
