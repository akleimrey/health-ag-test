import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { slider } from './route.animation';
import { BrowserUtil } from './util/browser.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider]
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  prepareRoute(outlet: RouterOutlet) {
    // tslint:disable-next-line: no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  get isMobile() {
    return BrowserUtil.isMobile;
  }


}
