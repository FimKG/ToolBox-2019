import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private userService: UserService, private router: Router) { }
  
  canActivate(): boolean {
   
   if (this.userService.loggedIn()) {
     this.router.navigate(['/posted-jobs'])
     return true
   } else {
     this.router.navigate(['/login'])
     return false
   }
  }
}
