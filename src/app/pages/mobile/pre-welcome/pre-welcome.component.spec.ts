import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreWelcomeComponent } from './pre-welcome.component';

describe('PreWelcomeComponent', () => {
  let component: PreWelcomeComponent;
  let fixture: ComponentFixture<PreWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
