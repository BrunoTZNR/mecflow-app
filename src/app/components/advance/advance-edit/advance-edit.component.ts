import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdvanceService } from 'src/app/services/advance.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/types/Employee.model';

@Component({
  selector: 'app-advance-edit',
  templateUrl: './advance-edit.component.html',
  styleUrls: ['./advance-edit.component.scss']
})
export class AdvanceEditComponent implements OnInit{

  id: string;

  employees$: Observable<Employee[]>;

  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private advanceService: AdvanceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];

    this.employees$ = this.employeeService.list();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      employee_id: [null],
      dt: [null],
      amount: [null],
      status: [null]
    })

    this.getData();
  }

  salvarAdvance(): void {
    console.log(this.form.value);
    this.advanceService.update(this.form.value).subscribe({
      next: () => this.router.navigate(['adiantamento/' + this.form.value.id])
    })
  }

  getData() {
    this.advanceService.findById(this.id).subscribe({
      next: data => {
        this.form.patchValue({
          id: data.id,
          employee_id: data.employee.id,
          dt: data.dt,
          amount: data.amount,
          status: data.status
        });
      },
      error: error => console.log(error.error)
    })
  }
}
