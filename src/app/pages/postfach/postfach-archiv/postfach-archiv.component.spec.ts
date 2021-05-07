import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostfachArchivComponent } from './postfach-archiv.component';

describe('PostfachArchivComponent', () => {
  let component: PostfachArchivComponent;
  let fixture: ComponentFixture<PostfachArchivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostfachArchivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostfachArchivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
