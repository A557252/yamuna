import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Constants } from '../utils/constants';
import { UtilFunctions } from './utilFunctions';

@Injectable()
export class AuthGuardService implements CanActivate {
    
    constructor(private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var url = state.url.split( '/' );
        if (Constants.URL.AUTHENTICATE_URLS.indexOf(url[1]) > -1) {
            if (!UtilFunctions.getLocalStorage('userDetail')) {
                this.router.navigateByUrl('/login');
                return false;
            } else {
                return true;
            }
        }
        return true;
    }
}