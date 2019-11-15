import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import{EmployeeService} from './../employee.service';
import { FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';
import{CandeactivatedService} from './../guards/candeactivated.service'
import { Donationlist } from 'src/models/Donations';
@Component({
  selector: 'app-donationform',
  templateUrl: './donationform.component.html',
  styleUrls: ['./donationform.component.css']
})
export class DonationformComponent implements OnInit {

  SERVER_URL = "https://localhost:44373/api/donationlists";
  uploadForm: FormGroup;
  formData:Donationlist;

  constructor(private formBuilder: FormBuilder,private router:Router, private httpClient: HttpClient,private service:EmployeeService) {
    this.uploadForm = this.formBuilder.group({
      firstname: new FormControl(null, Validators.required),
      lastname:new FormControl(null, Validators.required),
      phone:new FormControl(null, Validators.required),
      email:new FormControl(null, Validators.required),
      street:new FormControl(null, Validators.required),
      city:new FormControl(null, Validators.required),
      state:new FormControl(null, Validators.required),
      zip:new FormControl(null, Validators.required),
      country:new FormControl(null, Validators.required),
      donationtype:new FormControl(null, Validators.required),
      amount:new FormControl(null, Validators.required)
  
    })
   }
  logForm(value: any) {
    console.log(value);
  }
  
  
  ngOnInit() {
    // this.uploadForm = this.formBuilder.group({
    //   firstname: [''],
    //   lastname:[''],
    //   phone:[''],
    //   email:[''],
    //   street:[''],
    //   city:[''],
    //   state:[''],
    //   zip:[''],
    //   country:[''],
    //   donationtype:[''],
    //   amount:['']
  
    // })
   
	}	


  onSubmit(){
    if(this.uploadForm.valid){
    var formData={
      FirstName: this.uploadForm.controls['firstname'].value,
      LastName: this.uploadForm.controls['lastname'].value,
      Phone: this.uploadForm.controls['phone'].value,
      Email: this.uploadForm.controls['email'].value,
      Street: this.uploadForm.controls['street'].value,
      City: this.uploadForm.controls['city'].value,
      State: this.uploadForm.controls['state'].value,
      Zip: this.uploadForm.controls['zip'].value,
      Country: this.uploadForm.controls['country'].value,
      Dtype: this.uploadForm.controls['donationtype'].value,
      Amount: this.uploadForm.controls['amount'].value
    }
    //let formData:any = new FormData();
    // formData.append('firstname', this.uploadForm.get('firstname').value);
    // formData.append('lastname', this.uploadForm.get('lastname').value);
    // formData.append('phone', this.uploadForm.get('phone').value);
    // formData.append('email', this.uploadForm.get('email').value);
    // formData.append('street', this.uploadForm.get('street').value);
    // formData.append('city', this.uploadForm.get('city').value);
    // formData.append('state', this.uploadForm.get('state').value);
    // formData.append('zip', this.uploadForm.get('zip').value);
    // formData.append('country', this.uploadForm.get('country').value);
    console.log(formData);
    
    localStorage.setItem('formdata',JSON.stringify(formData));
    this.httpClient.post(this.SERVER_URL,formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    console.log("the session complete");
    this.router.navigate(['/cart']);
  }
  else{
    alert('The form is in valid');
  this.uploadForm.reset();
  }
}
  isValid(controlName) {
    return this.uploadForm.get(controlName).invalid && this.uploadForm.get(controlName).touched;
  }
  back(){
    this.router.navigate(['/user']);
  }
  getObject(){
    var getObject = JSON.parse(localStorage.getItem('formdata'));
    return getObject;
  }

}
