import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {

  constructor(private sessionService: SessionService,
    private router: Router) {}


  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if(!this.sessionService.isloggedc()) {
      window.location.replace("/");
      return false;
    }
    return true;

  };
}