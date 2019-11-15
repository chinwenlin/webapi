import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import{EmployeeService} from'./employee.service';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class TokenInterCeptorService implements HttpInterceptor {

  constructor(private _employeeService: EmployeeService) {  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this._employeeService.getToken()}`
      }
    });
    return next.handle(request);
  }
}
