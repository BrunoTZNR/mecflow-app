import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/types/Employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent{

  id: string;

  employee$: Observable<Employee>;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
    //pega o id da url
    this.id = this.route.snapshot.params['id'];

    this.employee$ = this.employeeService.findById(this.id);
  }
}
