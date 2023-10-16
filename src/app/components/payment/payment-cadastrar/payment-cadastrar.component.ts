import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/types/Employee.interface';

@Component({
  selector: 'app-payment-cadastrar',
  templateUrl: './payment-cadastrar.component.html',
  styleUrls: ['./payment-cadastrar.component.scss']
})
export class PaymentCadastrarComponent implements OnInit{

  idOs!: number;

  employees!: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {
    this.idOs = Number(this.route.snapshot.params['id-os']);
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  cadastrarPayment(): void {
    //chamar api post
  }
}
