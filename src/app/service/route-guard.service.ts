import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private auth: HardcodedAuthenticationService) { 

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.auth.isLoggedIn())
      return true;
    this.router.navigate(['login']);
    return false;

    // return this.auth.isLoggedIn()?true:false;

    // return this.auth.isLoggedIn();
  }
}
