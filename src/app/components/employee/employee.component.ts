import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/types/Employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent{

  employees$: Observable<Employee[]>;

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.employees$ = this.employeeService.list();
  }

  detalheEmployee(id: any): void {
    this.router.navigate(['funcionario/' + id])
  }
}
