import { Injectable } from '@angular/core';
import{ DonationformComponent } from './../donationform/donationform.component'
import { CanActivate,  RouterStateSnapshot, CanDeactivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './../employee.service';
import{Router}from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import{LoginComponent} from './../login/login.component'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  a:LoginComponent;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if (localStorage.getItem('token')!=null) {
      return true;
  }
  else{
  //this.router.navigate(['/login']);
  alert("You don't have access to enter this page. ")
  return false;
  }
  } 
   constructor(private authService: EmployeeService, private router: Router) { }
}
