import { Component,ViewChild ,AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(LoginComponent,{static: false}) login:LoginComponent;
  
  title = 'NGO';
}
