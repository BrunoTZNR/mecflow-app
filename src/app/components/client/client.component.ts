import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/types/Client.interface';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit{

  clients: Client[] = [];

  constructor(
    private clienteService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clients = this.clienteService.getClients();
  }

  detalheClient(id: any): void {
    this.router.navigate(['cliente/' + id]);
  }
}
