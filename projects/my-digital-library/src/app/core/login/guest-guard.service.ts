import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectIsAuthenticated } from '../auth/auth.selectors';
import { AppState } from '../core.state';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  canActivate(): Observable<boolean> {
    let needLogin = false;
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    let sub = this.isAuthenticated$.subscribe(x => {
      needLogin = !x;
      // sub.unsubscribe();
    });

    return of(needLogin)
  }

}
