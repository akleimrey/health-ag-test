import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RechnungComponent } from 'src/app/components/rechnung/rechnung.component';
import { EuroCurrencyPipe } from 'src/app/pipes/euro-currency.pipe';
import { RechnungenComponent } from './rechnungen.component';

describe('RechnungenComponent', () => {
  let component: RechnungenComponent;
  let fixture: ComponentFixture<RechnungenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RechnungenComponent, RechnungComponent, EuroCurrencyPipe], imports: [TranslateModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechnungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
