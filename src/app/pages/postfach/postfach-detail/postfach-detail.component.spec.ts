import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostfachDetailComponent } from './postfach-detail.component';

describe('PostfachDetailComponent', () => {
  let component: PostfachDetailComponent;
  let fixture: ComponentFixture<PostfachDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostfachDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostfachDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
