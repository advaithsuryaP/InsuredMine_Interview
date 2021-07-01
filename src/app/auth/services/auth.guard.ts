import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Pipe the user observable to see if a user exists
    return this.authService.userObs.pipe(
      map(user => {
        // If a truish value exists then isAuthenticated = true; else false
        const isAuthenticated = !!user;
        // User exists, so proceed
        if(isAuthenticated) return true;
        // User doesn't exist, so navigate back to the login page
        else return this.router.createUrlTree(['/login']);
      })
    );
  }
  
}
