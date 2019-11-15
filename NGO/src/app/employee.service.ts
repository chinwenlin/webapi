import { Injectable } from '@angular/core';
import{ HttpClient,HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import{catchError}from 'rxjs/operators';
import{IEmployee}from './IEmployee';
import{IDonation} from './IDonation';
import { IDonations } from './IDonations';
import{Employee} from './../models/Employee';
import{Donationlist}from './../models/Donations';
import{Donations}from './../models/Donation';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public apiurl:string="https://localhost:44373/api";
  public _url:string="https://localhost:44373/api/employees";
  public _url1:string="https://localhost:44373/api/donations";
  public _url2:string="https://localhost:44373/api/donationlists";
  public firstPage: string = "";
public prevPage: string = "";
public nextPage: string = "";
public lastPage: string = "";
  employee:IEmployee;
  donation:IDonation;
  donationlist:IDonations;
   isloggedIn: boolean = false;
   isAdmin:boolean=true;
   employeelist:Employee[]; 
   
   
  constructor(private http:HttpClient) { }
  
  private extractData(res: Response) {
    let body = res.json();
    return body;
} 
private handleErrorObservable (error: Response | any) {
  console.error(error.message || error);
  return Observable.throw(error.message || error);
} 
  submitRegister(body:any){
    return this.http.post('https://localhost:44373/api/employees', body,{
      observe:'body'
    });
  }
  login(body:any){
    return this.http.post('https://localhost:44373/api/employees', body,{
      observe:'body'
    });
  }
  getToken():string{
    return localStorage.getItem("token"||"token1");
  }
  storeToken(token:string){
    localStorage.setItem("token",token);
  }
  storeuserToken(token:string){
    localStorage.setItem("token1",token);
  }
    getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this._url).pipe(catchError(this.errorHandler))
    
    }
    getDonations(){
      return this.http.get<Donations[]>(this._url1).pipe(catchError(this.errorHandler));
      
    }
    getDonationList():Observable<Donationlist[]>{
      return this.http.get<Donationlist[]>(this._url2).pipe(catchError(this.errorHandler))
    }   
    isUserLoggedIn(): boolean {
      if(localStorage.getItem('token')===null)
      return this.isloggedIn;
    }
    isUserAdmin():boolean{
      if(localStorage.getItem('token')!=null){
        //console.log('token=null')
      return this.isAdmin;
    }
      else{
        return this.isloggedIn;
      }
    }
    errorHandler(error:HttpErrorResponse){
      return throwError(error.message||"Server Error");
    }
  }