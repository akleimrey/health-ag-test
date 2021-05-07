import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageResolverService implements Resolve<object> {

  constructor(private translate: TranslateService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): object | Observable<object> | Promise<object> {
    return this.translate.get('health-ag');
  }
}
