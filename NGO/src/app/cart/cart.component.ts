import { Component, OnInit } from '@angular/core';
import { DonationformComponent } from '../donationform/donationform.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public data=[];
  constructor() { }

  ngOnInit() {
      this.data=this.getObject();
    console.log(this.data);
    
  }
  getObject(){
    var getObject = JSON.parse(localStorage.getItem('formdata'));
    return getObject;
  }

}
