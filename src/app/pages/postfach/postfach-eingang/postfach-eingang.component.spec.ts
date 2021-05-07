import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostfachEingangComponent } from './postfach-eingang.component';

describe('PostfachEingangComponent', () => {
  let component: PostfachEingangComponent;
  let fixture: ComponentFixture<PostfachEingangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostfachEingangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostfachEingangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
