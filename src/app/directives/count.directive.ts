import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { EuroCurrencyPipe } from '../pipes/euro-currency.pipe';

@Directive({
  selector: '[appCount]'
})
export class CountDirective implements OnChanges {

  $countUpSubject: Subject<number> = new Subject<number>();
  $countDownSubject: Subject<number> = new Subject<number>();

  @Input() countUpTo: number;
  @Input() countDownTo: number;
  @Input() transitionSpeedInMs = 200;

  private currentCount = 0;

  constructor(elementRef: ElementRef) {

    this.$countUpSubject.subscribe((value: number) => {
      const updateCount = () => {
        const inc = value / this.transitionSpeedInMs;
        const count = this.currentCount;
        if (count < this.countUpTo) {
          elementRef.nativeElement.innerText = new EuroCurrencyPipe().transform((count + inc));
          this.currentCount = (count + inc);
          setTimeout(updateCount, 1);
        } else {
          elementRef.nativeElement.innerText = new EuroCurrencyPipe().transform(this.countUpTo);
        }
      };
      updateCount();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.$countUpSubject.next(changes?.countUpTo.currentValue);
  }

}
