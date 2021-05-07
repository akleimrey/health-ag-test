import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeihilfeAufwendungenComponent } from './beihilfe-aufwendungen.component';

describe('BeihilfeAufwendungenComponent', () => {
  let component: BeihilfeAufwendungenComponent;
  let fixture: ComponentFixture<BeihilfeAufwendungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeihilfeAufwendungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeihilfeAufwendungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
