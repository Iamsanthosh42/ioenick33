import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class safeGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      take(1),
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true; // Allow access if authenticated
        } else {
          this.router.navigate(['/login']);
          return false; // Redirect to login and deny access
        }
      })
    );
  }
}

