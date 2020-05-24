import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
//so now we have a local variable as _employeeService that gives us the instance service EmployeeService
//we'll fetch the data from this instance 
//code for that need to be written in ngOnInit  
constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    //getEmployyes() return the observable so we need to subsribe to it so 
    //data parameter m observable se data aa gya 
    //aur usko apn ne employees array local variable m store kr dia 
    //EZ
    this._employeeService.getEmployees()
    .subscribe((data) => this.employees=data);
  }

  public employees=[];
  
}
