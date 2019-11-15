import { Component, OnInit } from '@angular/core';
import{EmployeeService}from './../employee.service';
import{Donations} from './../../models/Donation';
import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public donations=[];
  public errorMsg;
  
  constructor( private _employeeService: EmployeeService ,private http: HttpClient) { }

  ngOnInit() {
    
     this._employeeService.getDonations().subscribe(
       (data)=>this.donations=data
   );
    }

}
