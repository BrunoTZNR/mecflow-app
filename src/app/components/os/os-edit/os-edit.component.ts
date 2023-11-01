import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { ClientService } from 'src/app/services/client.service';
import { ManufactureService } from 'src/app/services/manufacture.service';
import { OsService } from 'src/app/services/os.service';
import { ProductService } from 'src/app/services/product.service';
import { Car } from 'src/app/types/Car.interface';
import { Client } from 'src/app/types/Client.interface';
import { Manufacture } from 'src/app/types/Manufacture.interface';
import { Os } from 'src/app/types/Os.interface';

@Component({
  selector: 'app-os-edit',
  templateUrl: './os-edit.component.html',
  styleUrls: ['./os-edit.component.scss']
})
export class OsEditComponent implements OnInit{

  os!: Os;
  id!: number;
  clients!: Client[];
  cars!: Car[];
  services!: Manufacture[];

  selectedCli!: number;
  selectedCar!: number;
  selectedStatus!: string;

  constructor(
    private osService: OsService,
    private clientService: ClientService,
    private carService: CarService,
    private productService: ProductService,
    private manufactureService: ManufactureService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clients = this.clientService.getClients();
    this.cars = this.carService.getCars();
    this.services = this.manufactureService.getManufactures();

    this.id = Number(this.route.snapshot.params['id']);

    this.selectedCli = this.os.client.id;
    this.selectedCar = this.os.car.id;
    this.selectedStatus = this.os.status;

    console.log(this.os);
  }

  editarPagamentoOs(): void {
    this.router.navigate(['pagamento-os/' + this.route.snapshot.params['id'] + '/editar/' + this.os.id]);
  }

  editarServicoOs(pos: any): void {
    this.router.navigate(['servico/' + this.route.snapshot.params['id'] + '/editar/' + this.os.id + '/' + pos]);
  }

  editarProdutoOs(pos: any): void {
    this.router.navigate(['produto/' + this.route.snapshot.params['id'] + '/editar/' + this.os.id + '/' + pos]);
  }

  salvarOs(): void {
    //chamar api put
  }
}
