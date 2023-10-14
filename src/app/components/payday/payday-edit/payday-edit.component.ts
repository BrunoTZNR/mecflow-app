import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { PaydayService } from 'src/app/services/payday.service';
import { Employee } from 'src/app/types/Employee.interface';
import { Payday } from 'src/app/types/Payday.interface';

@Component({
  selector: 'app-payday-edit',
  templateUrl: './payday-edit.component.html',
  styleUrls: ['./payday-edit.component.scss']
})
export class PaydayEditComponent implements OnInit{

  id!: string;
  x!: any;

  payday!: Payday;
  employees!: Employee[];

  constructor(
    private paydayService: PaydayService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.payday = this.paydayService.getPayday(Number(this.id) - 1);
    this.employees = this.employeeService.getEmployees();

    this.employees.forEach(e => {
      if(e.id == this.payday.idEmployee) {
        this.x = e.id;
      }
    });
    // console.log(this.advance);

  }

  salvarPayday(): void {

  }
}
