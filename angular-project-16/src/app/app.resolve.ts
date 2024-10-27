import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppService } from './app.service'

@Injectable()
export class ResolveGuardGuard implements Resolve<any> {
  constructor(public service: AppService ){}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      return this.service.getUserList().subscribe(d => d);
    
  }
}