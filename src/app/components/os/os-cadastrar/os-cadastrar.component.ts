import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { Car } from 'src/app/types/Car.model';
import { Client } from 'src/app/types/Client.model';

@Component({
  selector: 'app-os-cadastrar',
  templateUrl: './os-cadastrar.component.html',
  styleUrls: ['./os-cadastrar.component.scss']
})
export class OsCadastrarComponent implements OnInit{

  form!: FormGroup;

  cars$: Observable<Car[]>;
  clients$: Observable<Client[]>;

  constructor(
    private formBuilder: FormBuilder,
    private car: CarService,
    private client: ClientService,
    private osService: OsService,
    private router: Router
  ) {
    this.cars$ = this.car.list();
    this.clients$ = this.client.list();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      client_id: [null],
      car_id: [null],
      dtIn: [new Date(Date.now()).toISOString().split('T')[0]],
      dtOut: [new Date(Date.now()).toISOString().split('T')[0]],
      status: ['pendente']
    })
  }

  cadastrarOs(): void {
    //console.log(this.form.value);

    this.osService.save(this.form.value).subscribe({
      next: () => this.router.navigate(['os']),
      error: error => console.log(error.error)
    })
  }
}
