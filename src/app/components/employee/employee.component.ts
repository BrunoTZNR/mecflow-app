import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/types/Employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{

  funcionarios!: Employee[];

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.funcionarios = this.employeeService.getEmployees();
  }
}
