import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/types/Employee.interface';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit{

  id!: string;

  func!: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    //pega o id da url
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.func = this.employeeService.getEmployee(Number(this.id) - 1);
    // console.log(this.func);
  }
}
