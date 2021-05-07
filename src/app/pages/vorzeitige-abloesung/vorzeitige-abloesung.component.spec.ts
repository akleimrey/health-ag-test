import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VorzeitigeAbloesungComponent } from './vorzeitige-abloesung.component';

describe('VorzeitigeAbloesungComponent', () => {
  let component: VorzeitigeAbloesungComponent;
  let fixture: ComponentFixture<VorzeitigeAbloesungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VorzeitigeAbloesungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VorzeitigeAbloesungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
