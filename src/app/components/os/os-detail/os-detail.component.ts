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
import { Product } from 'src/app/types/Product.interface';

@Component({
  selector: 'app-os-detail',
  templateUrl: './os-detail.component.html',
  styleUrls: ['./os-detail.component.scss']
})
export class OsDetailComponent implements OnInit{

  id!: number;

  os!: Os;
  clients!: Client[];
  cars!: Car[];
  products!: Product[];
  services!: Manufacture[];

  constructor(
    private osService: OsService,
    private clientService: ClientService,
    private carService: CarService,
    private productService: ProductService,
    private manufactureService: ManufactureService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.os = this.osService.getOs(this.id);
    this.clients = this.clientService.getClients();
    this.cars = this.carService.getCars();
    this.products = this.productService.getProducts();
    this.services = this.manufactureService.getManufactures();

    console.log(this.os);
  }

  detalheServicoOs(): void {

  }

  detalheProdutoOs(): void {

  }

  detalhePagamentoOs(): void {

  }

  editarOs(): void {
    this.router.navigate(['os/' + this.id + '/editar'])
  }

  deletarOs(): void {

  }
}
