import { Component, OnInit } from '@angular/core';
import{EmployeeService} from './../employee.service';
@Component({
  selector: 'app-donationlist',
  templateUrl: './donationlist.component.html',
  styleUrls: ['./donationlist.component.css']
})
export class DonationlistComponent implements OnInit {
  public donationlist=[];
  public errorMsg;
  constructor( private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getDonationList().subscribe(
      (data)=>this.donationlist=data,
      (error)=>this.errorMsg=error,
      ()=>console.log(this.donationlist)
    );
  }

}
