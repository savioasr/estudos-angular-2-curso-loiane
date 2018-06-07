import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CursosGuard implements CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | Observable<boolean> {

    return true;
  }
}