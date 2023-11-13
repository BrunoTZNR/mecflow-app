import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { OsProductsService } from 'src/app/services/osProducts.service';
import { OsServicesService } from 'src/app/services/osServices.service';
import { PaymentService } from 'src/app/services/payment.service';
import { Car } from 'src/app/types/Car.model';
import { Client } from 'src/app/types/Client.model';
import { OsRequest } from 'src/app/types/Os.model';
import { OsProductsResponse } from 'src/app/types/OsProducts.model';
import { OsServicesResponse } from 'src/app/types/OsServices.model';
import { Payment } from 'src/app/types/Payment.model';

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
  payments$: Observable<Payment[]>;

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
    private osServices: OsServicesService,
    private payService: PaymentService
  ) {
    this.id = this.route.snapshot.params['id'];

    this.clients$ = this.cliService.list();
    this.cars$ = this.carService.list();
    this.osProducts$ = this.opService.listByOs(this.id);
    this.osServices$ = this.osServices.listByOs(this.id);
    this.payments$ = this.payService.list(this.id);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      client_id: [null],
      car_id: [null],
      dtIn: [null],
      dtOut: [null],
      status: [null],
      osProducts: [[]],
      osServices: [[]]
    });

    this.getData();
  }

  getData() {
    this.osService.findById(this.id).subscribe({
      next: data => {
        this.form.patchValue({
          client_id: data.client.id,
          car_id: data.car.placa,
          dtIn: data.dtIn,
          dtOut: data.dtOut,
          status: data.status
        });
      },
      error: error => console.log(error.error)
    })
  }

  // PAGAMENTOS

  editarPagamentoOs(): void {
    this.router.navigate(['pagamento-os/' + this.route.snapshot.params['id'] + '/editar/' + this.id]);
  }

  cadastrarPaymentOs(): void {
    this.router.navigate(['pagamento-os/cadastrar/' + this.id])
  }

  deletarPaymentOs(id_payment: any): void {
    this.payService.remove(id_payment).subscribe({
      next: () => this.payments$ = this.payService.list(this.id),
      error: e => console.log(e.error)
    })
  }

  // SERVIÇOS

  editarServicoOs(id_os: any, id_service: any): void {
    this.router.navigate(['servico/' + id_os + '/editar/' + this.id + '/' + id_service]);
  }

  cadastrarServicoOs(): void {
    this.router.navigate(['servico/cadastrar/' + this.id])
  }

  deletarServicoOs(id_os: any, id_service: any): void {
    this.osServices.remove(id_os, id_service).subscribe({
      next: () => this.osServices$ = this.osServices.listByOs(this.id),
      error: e => console.log(e.error)
    })
  }

  // PRODUTOS

  editarProdutoOs(id_os: any, id_product: any): void {
    this.router.navigate(['produto/' + id_os + '/editar/' + this.id + '/' + id_product]);
  }

  cadastrarProdutoOs(): void {
    this.router.navigate(['produto/cadastrar/' + this.id])
  }

  deletarProdutoOs(id_os: any, id_product: any): void {
    this.opService.remove(id_os, id_product).subscribe({
      next: () => this.osProducts$ = this.opService.listByOs(this.id),
      error: e => console.log(e.error)
    })
  }

  //SALVAR OS

  salvarOs(): void {
    let totalAmount: number = 0;
    let totalDiscount: number = 0;

    let osRequest: OsRequest = {
      id: Number(this.id),
      dtIn: this.form.value.dtIn,
      dtOut: this.form.value.dtOut,
      totalAmount: totalAmount,
      totalDiscount: totalDiscount,
      status: this.form.value.status,
      client_id: this.form.value.client_id,
      car_id: this.form.value.car_id
    }

    this.osService.update(osRequest).subscribe({
      next: () => this.router.navigate(['os/' + this.id]),
      error: e => console.log(e.error)
    })
  }
}
