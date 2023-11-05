import { AdvanceService } from 'src/app/services/advance.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/types/Employee.model';
import { AdvanceCreate } from 'src/app/types/Advance.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advance-cadastrar',
  templateUrl: './advance-cadastrar.component.html',
  styleUrls: ['./advance-cadastrar.component.scss']
})
export class AdvanceCadastrarComponent implements OnInit{

  employees$: Observable<Employee[]>;

  form!: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private advanceService: AdvanceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.employees$ = this.employeeService.list();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      employee_id: [null],
      dt: [new Date(Date.now()).toISOString().split('T')[0]],
      amount: [null],
      status: ['pendente']
    })
  }

  cadastrarAdvance(): void {
    //console.log(this.form.value);
    this.advanceService.save(this.form.value).subscribe({
      next: () => this.router.navigate(['adiantamento']),
      error: error => console.log(error.error)
    })
  }
}
