import { Directive, ElementRef, HostListener, Input, Output, Renderer2, EventEmitter } from '@angular/core';
import { IInvoice } from '../interfaces/invoice';

@Directive({
  selector: '[appMarkItems]'
})
export class MarkItemsDirective {

  @Input() invoiceRef: IInvoice;
  @Output() $itemRefDeselected: EventEmitter<IInvoice> = new EventEmitter();
  @Output() $itemRefSelected: EventEmitter<IInvoice> = new EventEmitter();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') onClick() {

    if (this.elementRef.nativeElement.classList.contains('active')) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'active');
      const img = this.elementRef.nativeElement.querySelector('img');
      img.src = '../../../assets/img/gemeinsam-kreisohnehaken.svg';
      if (this.invoiceRef) {
        this.$itemRefDeselected.emit(this.invoiceRef);
      }
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'active');
      const img = this.elementRef.nativeElement.querySelector('img');
      img.src = '../../../assets/img/gemeinsam-kreismithaken.svg';
      if (this.invoiceRef) {
        this.$itemRefDeselected.emit(this.invoiceRef);
      }
    }
  }
}
