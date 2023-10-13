import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/types/Employee.interface';

@Component({
  selector: 'app-advance-cadastrar',
  templateUrl: './advance-cadastrar.component.html',
  styleUrls: ['./advance-cadastrar.component.scss']
})
export class AdvanceCadastrarComponent implements OnInit{

  employees!: Employee[];

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  cadastrarAdvance(): void {
    //chamar api post
  }
}
