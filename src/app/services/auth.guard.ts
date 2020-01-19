import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CookiesService} from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private cookieService: CookiesService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    // @ts-ignore
    if (this.cookieService.getCookie('token')) {
      return true;
    } else {
      document.querySelector('.guard').innerHTML = 'Blog only for registered users!';
      return false;
    }
  }
}
