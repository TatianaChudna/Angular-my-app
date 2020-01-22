import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
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
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }
}
