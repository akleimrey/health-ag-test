import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, AfterViewInit {

  @Input() modalId = 'defaultModal';

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.closeModal();
  }

  public closeModal(): void {
    const modal = document.getElementById(this.modalId);
    const modalContent = modal.getElementsByClassName('modal-content')[0];
    const closeButton = modal.getElementsByClassName('closeModal')[0];
    closeButton.addEventListener('click', () => {
      this.renderer.setStyle(document.getElementsByTagName('body')[0], 'overflow-y', 'visible');
      this.renderer.setStyle(modal, 'display', 'none');
      this.renderer.removeClass(modalContent, 'openModal');
    });
  }

  public openModal(): void {
    const modal = document.getElementById(this.modalId);
    const modalContent = modal.getElementsByClassName('modal-content')[0];
    this.renderer.setStyle(document.getElementsByTagName('body')[0], 'overflow-y', 'hidden');
    this.renderer.setStyle(modal, 'display', 'flex');

    setTimeout(() => {
      this.renderer.addClass(modalContent, 'openModal');
    }, 50);

  }

  // handler = () => this.sayHello('Kevin');

  ngOnInit(): void {
    // const open = document.getElementById(this.modalId);
    // open.addEventListener('click', this.handler);

    // open.removeEventListener('click', this.handler);
  }

  sayHello(word: string) {
    console.log(`hello ${word}`);
  }

}
