import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProductService } from './apiservice/product.service';

@Injectable({

  providedIn: 'root'

})

export class AuthGuard implements CanActivate {
  constructor(private authGuard:ProductService){}
  canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return this.authGuard.isUserLoggedIn;

};
}
