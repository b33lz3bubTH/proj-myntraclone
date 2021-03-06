import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../sharedServices/user.auth.service';

@Injectable()
export class AfterLoggedAuthGuard implements CanActivate {


  constructor(private _router: Router,private  userObj: UserAuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.userObj.isLogged){
        this._router.navigate(['/']);
    }
    return true;
  }

}