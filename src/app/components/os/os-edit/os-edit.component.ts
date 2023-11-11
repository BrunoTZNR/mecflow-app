import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { OsProductsService } from 'src/app/services/osProducts.service';
import { OsServicesService } from 'src/app/services/osServices.service';
import { Car } from 'src/app/types/Car.model';
import { Client } from 'src/app/types/Client.model';
import { OsProductsResponse } from 'src/app/types/OsProducts.model';
import { OsServicesResponse } from 'src/app/types/OsServices.model';

@Component({
  selector: 'app-os-edit',
  templateUrl: './os-edit.component.html',
  styleUrls: ['./os-edit.component.scss']
})
export class OsEditComponent implements OnInit{

  id: string;

  form!: FormGroup;

  clients$: Observable<Client[]>;
  cars$: Observable<Car[]>;

  osProducts$: Observable<OsProductsResponse[]>;
  osServices$: Observable<OsServicesResponse[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private osService: OsService,
    private cliService: ClientService,
    private carService: CarService,
    private opService: OsProductsService,
    private osServices: OsServicesService
  ) {
    this.id = this.route.snapshot.params['id'];

    this.clients$ = this.cliService.list();
    this.cars$ = this.carService.list();
    this.osProducts$ = this.opService.listByOs(this.id);
    this.osServices$ = this.osServices.listByOs(this.id);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      client: [null],
      car: [null],
      dtIn: [null],
      dtOut: [null],
      status: [null]
    });

    this.getData();
  }

  getData() {
    this.osService.findById(this.id).subscribe({
      next: data => {
        this.form.patchValue({
          client: data.client.id,
          car: data.car.placa,
          dtIn: data.dtIn,
          dtOut: data.dtOut,
          status: data.status
        });
      },
      error: error => console.log(error.error)
    })
  }

  editarPagamentoOs(): void {
    this.router.navigate(['pagamento-os/' + this.route.snapshot.params['id'] + '/editar/' + this.id]);
  }

  editarServicoOs(id_os: any, id_service: any): void {
    this.router.navigate(['servico/' + id_os + '/editar/' + this.id + '/' + id_service]);
  }

  cadastrarServicoOs(): void {
    this.router.navigate(['servico/cadastrar/' + this.id])
  }

  editarProdutoOs(id_os: any, id_product: any): void {
    this.router.navigate(['produto/' + id_os + '/editar/' + this.id + '/' + id_product]);
  }

  cadastrarProdutoOs(): void {
    this.router.navigate(['produto/cadastrar/' + this.id])
  }

  salvarOs(): void {
    //chamar api put
  }
}
