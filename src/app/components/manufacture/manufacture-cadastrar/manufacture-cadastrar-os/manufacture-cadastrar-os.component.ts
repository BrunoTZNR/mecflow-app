import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { ManufactureService } from 'src/app/services/manufacture.service';
import { OsServicesService } from 'src/app/services/osServices.service';
import { Employee } from 'src/app/types/Employee.model';
import { Services } from 'src/app/types/Services.model';

@Component({
  selector: 'app-manufacture-cadastrar-os',
  templateUrl: './manufacture-cadastrar-os.component.html',
  styleUrls: ['./manufacture-cadastrar-os.component.scss']
})
export class ManufactureCadastrarOsComponent implements OnInit{

  id_os: string;

  form!: FormGroup

  employees$: Observable<Employee[]>;
  services$: Observable<Services[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private empService: EmployeeService,
    private servService: ManufactureService,
    private oservService: OsServicesService
  ) {
    this.id_os = this.route.snapshot.params['id-os'];

    this.employees$ = this.empService.list();
    this.services$ = this.servService.list();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id_os: [this.id_os],
      id_services: [null],
      amount: [null],
      quantity: [1],
      discount: [0],
      employee_id: [null]
    })
  }

  cadastrarServicoOs(): void {
    console.log(this.form.value);

    this.oservService.save(this.form.value).subscribe({
      next: () => this.router.navigate(['os/' + this.id_os + '/editar']),
      error: e => console.log(e.error)
    })
  }

  addServicePrice() {
    if(this.form.value.id_services != null) {
      this.servService.findById(this.form.value.id_services).subscribe({
        next: data => this.form.patchValue({ amount: data.amount }),
        error: e => console.log(e.error)
      })
    }
  }
}
