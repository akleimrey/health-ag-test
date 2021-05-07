import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-welcome',
  templateUrl: './pre-welcome.component.html',
  styleUrls: ['./pre-welcome.component.scss']
})
export class PreWelcomeComponent implements AfterViewInit {

  constructor(private route: Router) { }
  ngAfterViewInit(): void {
    const routeP = this.route;

    setTimeout(() => {
      $('#mobileWhiteIntroScreen').addClass('finalState');
      $('#mobileIntroQuadrat, #mobileIntroFont').removeClass('firstState');
      // routeP.navigateByUrl('/');
    }, 1000);


    setTimeout(() => {
      routeP.navigateByUrl('/splash');
    }, 3000);


  }
}
