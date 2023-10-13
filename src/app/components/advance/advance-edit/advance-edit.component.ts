import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvanceService } from 'src/app/services/advance.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Advance } from 'src/app/types/Advance.interface';
import { Employee } from 'src/app/types/Employee.interface';

@Component({
  selector: 'app-advance-edit',
  templateUrl: './advance-edit.component.html',
  styleUrls: ['./advance-edit.component.scss']
})
export class AdvanceEditComponent implements OnInit{

  id!: string;
  x!: any;

  advance!: Advance;
  employees!: Employee[];

  constructor(
    private advanceService: AdvanceService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.advance = this.advanceService.getAdvance(Number(this.id) - 1);
    this.employees = this.employeeService.getEmployees();

    this.employees.forEach(e => {
      if(e.id == this.advance.idEmployee) {
        this.x = e.id;
      }
    });
    // console.log(this.advance);

  }

  salvarAdvance(): void {

  }
}
