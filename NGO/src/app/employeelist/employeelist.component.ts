import { Component, OnInit } from '@angular/core';
import{EmployeeService} from './../employee.service';
import{Employee}from './../../models/Employee';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  myForm:FormGroup;

  public employees=[];
  public errorMsg;
  public datas;
  myemployees=this.employees[0];
  constructor( private _employeeService: EmployeeService,private formBuilder: FormBuilder) { 
   
  }

  ngOnInit() {

    this._employeeService.getEmployees().subscribe(
      (data)=>this.employees=data,
      (error)=>this.errorMsg=error,
      ()=>console.log(this.employees));
    
   // console.log(this.employees);
  }
  

}
