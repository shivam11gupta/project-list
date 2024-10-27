import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(): boolean {
    if (localStorage.getItem('loginDetail')) {
      return true; // Allow access if the user is authenticated
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false; // Prevent access to the route
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
      if (localStorage.getItem('loginDetail')) {
        return true; // Allow access if the user is authenticated
      } else {
        this.router.navigate(['/login']); // Redirect to login if not authenticated
        return false; // Prevent access to the route
      }
}
}