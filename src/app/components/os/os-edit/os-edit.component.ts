import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { ClientService } from 'src/app/services/client.service';
import { ManufactureService } from 'src/app/services/manufacture.service';
import { OsService } from 'src/app/services/os.service';
import { ProductService } from 'src/app/services/product.service';
import { Car } from 'src/app/types/Car.model';
import { Client } from 'src/app/types/Client.interface';
import { Os } from 'src/app/types/Os.interface';

@Component({
  selector: 'app-os-edit',
  templateUrl: './os-edit.component.html',
  styleUrls: ['./os-edit.component.scss']
})
export class OsEditComponent implements OnInit{

  id: string;

  constructor(
    private osService: OsService,
    private clientService: ClientService,
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

  }

  editarPagamentoOs(): void {
    this.router.navigate(['pagamento-os/' + this.route.snapshot.params['id'] + '/editar/' + this.id]);
  }

  editarServicoOs(pos: any): void {
    this.router.navigate(['servico/' + this.route.snapshot.params['id'] + '/editar/' + this.id + '/' + pos]);
  }

  editarProdutoOs(pos: any): void {
    this.router.navigate(['produto/' + this.route.snapshot.params['id'] + '/editar/' + this.id + '/' + pos]);
  }

  salvarOs(): void {
    //chamar api put
  }
}
