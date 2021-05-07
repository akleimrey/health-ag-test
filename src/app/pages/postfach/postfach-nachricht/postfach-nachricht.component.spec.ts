import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostfachNachrichtComponent } from './postfach-nachricht.component';

describe('PostfachNachrichtComponent', () => {
  let component: PostfachNachrichtComponent;
  let fixture: ComponentFixture<PostfachNachrichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostfachNachrichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostfachNachrichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
