import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postfach',
  templateUrl: './postfach.component.html',
  styleUrls: ['./postfach.component.scss']
})
export class PostfachComponent implements OnInit, OnDestroy {

  subcription: Subscription;
  hideMailbox = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    // this.router.navigate(['eingang'], { relativeTo: this.route });
    this.subcription = this.router.events.subscribe(change => {
      if (change instanceof NavigationEnd) {
        this.hideMailbox = change.urlAfterRedirects.match('nachricht-neu') || change.urlAfterRedirects.match('nachricht') ? true : false ;
      }
    });
  }

  returnActiveOnEingang() {
    return { active: this.router.url.match(new RegExp('/postfach/eingang')) };
  }

  returnActiveOnArchiv() {
    return { active: this.router.url.match(new RegExp('/postfach/archiv')) };
  }

  returnActiveOnGesendet() {
    return { active: this.router.url.match(new RegExp('/postfach/gesendet')) };
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  ngOnInit() {
  }



}
