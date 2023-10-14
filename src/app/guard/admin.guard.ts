import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private sessionService: SessionService,
    private router: Router) {}


  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if(!this.sessionService.isloggeda()) {
      window.location.replace("/");
      return false;
    }
    return true;

  };
}