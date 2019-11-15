import { Injectable } from '@angular/core';
import { CanDeactivate } from "@angular/router";
import{DonationformComponent} from './../donationform/donationform.component'
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CandeactivatedService implements CanDeactivate<DonationformComponent>{
  canDeactivate(component: DonationformComponent): boolean{
    //if form is dirty, we display confirmation
    if(component.uploadForm.dirty){
        return confirm("Are you sure ?");
    }
    return true;
}

  constructor() { }
}
