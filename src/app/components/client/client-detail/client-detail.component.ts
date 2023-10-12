import { Client } from './../../../types/Client.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit{

  id!: string;

  cliente!: Client;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClientService
  ) {
    //pega o id da url
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.cliente = this.clienteService.getClient(Number(this.id) - 1);
    // console.log(this.cliente);
  }

  editarCliente(): void {
    this.router.navigate(['cliente/' + this.id + '/editar']);
  }

  deletarCliente(): void {

  }
}
