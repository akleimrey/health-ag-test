import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    // accordion function
    // Im Jahr 2021 benutzen wir kein var mehr :P außer Du schreibst globale funktionen
    // var acc = document.getElementsByClassName("accordion");
    // var i ist redundant. Für eine for-schleife machst Du allenfalls for(let i = 0; i < array.length; i++)
    // var i;

    // for (i = 0; i < acc.length; i++) {
    //   acc[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var panel = this.nextElementSibling;
    //     if (panel.style.maxHeight) {
    //       panel.style.maxHeight = null;
    //     } else {
    //       panel.style.maxHeight = panel.scrollHeight + "px";
    //     }
    //   });
    // }

    const accordions = document.querySelectorAll('button.accordion');
    accordions.forEach(el => {
      el.addEventListener('click', this.handleAccordionClick);
    });
  }

  /**
   * Warum einen Expliziten Handler? Nur dadurch können wir Event-Listener auch Abmelden. Bei wenigen Elementen fällt es nicht auf.
   * Bei wenigen Elementen ist es selten ein Problem, wenn im Hintergrund auf den DOM Elementen Listener "horchen". Bei vielen Elementen,
   * führt dies jedoch zu performance Engpässen.
   */
  private handleAccordionClick(context: MouseEvent) {
    const contextTarget = context.target as HTMLElement;
    const panel = contextTarget.nextElementSibling as HTMLElement;

    contextTarget.classList.toggle('active');
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
    contextTarget.removeEventListener('click', this.handleAccordionClick);
  }

}
