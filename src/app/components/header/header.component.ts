import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) {
  }

  logout(): void {
    localStorage.removeItem('USER_TOKEN');
    this.route.navigate(['/login']);
  }

  ngActiveClassRechnungen(): object {
    return { active: new RegExp(/rechnungen/gi).test(this.route.url) ? true : false};
  }

  ngActiveClassPostfach(): object {
    return { active: new RegExp(/postfach/gi).test(this.route.url) ? true : false};
  }

  ngActiveClassHilfe(): object {
    return { active: new RegExp(/hilfe/gi).test(this.route.url) ? true : false};
  }

  ngActiveClassProfil(): object {
    return { active: new RegExp(/profil/gi).test(this.route.url) ? true : false};
  }

  ngOnInit() {
  }

}
