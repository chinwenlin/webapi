import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{HttpClientModule} from '@angular/common/http';
import{EmployeelistComponent}from './employeelist/employeelist.component'
import { EmployeeService } from './employee.service';
import { UserComponent } from './user/user.component';
import{RouterModule,Routes} from '@angular/router';
import { from } from 'rxjs';
import { DonationformComponent } from './donationform/donationform.component';
import { CartComponent } from './cart/cart.component';
import { DonationlistComponent } from './donationlist/donationlist.component';
import{ReactiveFormsModule}from '@angular/forms';
import { AuthGuardService } from './guards/auth-guard.service';
import { CandeactivatedService } from './guards/candeactivated.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material';
import { TokenInterCeptorService } from './token-inter-ceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeelistComponent,
    UserComponent,
    DonationformComponent,
    CartComponent,
    DonationlistComponent,
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeService,AuthGuardService, CandeactivatedService,TokenInterCeptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
