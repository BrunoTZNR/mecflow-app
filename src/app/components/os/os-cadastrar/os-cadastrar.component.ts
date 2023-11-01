import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { Client } from 'src/app/types/Client.interface';
import { Os } from 'src/app/types/Os.interface';
import { Car } from 'src/app/types/Car.interface';
import { ProductService } from 'src/app/services/product.service';
import { ManufactureService } from 'src/app/services/manufacture.service';
import { Manufacture } from 'src/app/types/Manufacture.interface';

@Component({
  selector: 'app-os-cadastrar',
  templateUrl: './os-cadastrar.component.html',
  styleUrls: ['./os-cadastrar.component.scss']
})
export class OsCadastrarComponent implements OnInit{

  oss!: Os[];
  clients!: Client[];
  cars!: Car[];
  services!: Manufacture[];

  constructor(
    private osService: OsService,
    private clientService: ClientService,
    private carService: CarService,
    private productService: ProductService,
    private manufactureService: ManufactureService
  ) {}

  ngOnInit(): void {
    this.clients = this.clientService.getClients();
    this.cars = this.carService.getCars();
    this.services = this.manufactureService.getManufactures();

    console.log(this.oss);
  }

  cadastrarOs(): void {
    //chamar api post
  }
}
