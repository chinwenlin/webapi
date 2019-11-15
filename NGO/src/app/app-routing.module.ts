import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { DonationformComponent } from './donationform/donationform.component';
import { DonationlistComponent } from './donationlist/donationlist.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { CandeactivatedService } from './guards/candeactivated.service';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'donation',component: DonationlistComponent,canActivate:[AuthGuardService]
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'form', component: DonationformComponent, canDeactivate:[CandeactivatedService]
  },
  {
    path:'user',component: UserComponent
  },
  {
     path:'admin',component:EmployeelistComponent,canActivate:[AuthGuardService]
  },
  {
    path:'cart',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
