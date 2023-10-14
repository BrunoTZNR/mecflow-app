import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/types/Employee.interface';

@Component({
  selector: 'app-payday-cadastrar',
  templateUrl: './payday-cadastrar.component.html',
  styleUrls: ['./payday-cadastrar.component.scss']
})
export class PaydayCadastrarComponent implements OnInit{

  employees!: Employee[];

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  cadastrarPayday(): void {
    //chamar api post
  }
}
