import { Component, OnInit, Input } from '@angular/core';
import{FormsModule, NgForm, FormControl} from'@angular/forms';
import{IEmployee}from'./../IEmployee';
import { EmployeeService } from '../employee.service';
import{user} from './../login';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAdmin:boolean;
  employee:user;
  message: String = '';
  loginForm:FormGroup;
  Role:string;
  constructor( private _myservice: EmployeeService,
    private _router: Router,
    private formBuilder: FormBuilder,private httpClient:HttpClient) {
    this.loginForm=this.formBuilder.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null,Validators.required)
    })
   }
  
 

  get diagnostic() { return JSON.stringify(this.employee); }

  ngOnInit() {
    localStorage.clear();
  }
  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }
  login(){
     console.log(this.loginForm.value);
     if(this.loginForm.valid){
       var formData={
       FirstName: this.loginForm.controls['username'].value,
       Password: this.loginForm.controls['password'].value
       }
    this._myservice.login(formData).subscribe(
      data=>{
        console.log(data);
       // localStorage.setItem('token',data.toString());
        console.log('session complete');
        if(formData.Password=='admin'){
          console.log('admin');
          this._myservice.storeToken(data.toString());
          //localStorage.setItem('jwt',data.toString());
          console.log(localStorage.getItem('token'));
          console.log('store data to token');
          this._router.navigate(['/admin']);
        }
        else{
          this._myservice.storeuserToken(data.toString());
          console.log('store data to token1: '+localStorage.getItem('token1'));

          console.log('user');
          //localStorage.setItem('token1',data.toString());
           this._router.navigate(['/user']);
        }
        
      },
      err=>{this.message='some error';
      alert('Please register first')
    },
    ()=>{

    }
    )
    }
    else{
      alert('Invalid Username or Password');
    }

  }
  back(){
    this._router.navigate(['/register']);
  }

}

