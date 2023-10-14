import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private tokenService: SessionService,
    private router: Router) {}


  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    
    if(this.tokenService.islogged()) {
      window.location.replace("/");
      return false;
    }
    return true;
  }
}
