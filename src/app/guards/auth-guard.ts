import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { SessionService } from 'app/services/session.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private _sessionService:SessionService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (this._sessionService.usuario != null) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }
}