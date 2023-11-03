import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/types/Client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent{

  clients$: Observable<Client[]>;

  constructor(
    private router: Router,
    private clientService: ClientService
  ) {
    this.clients$ = this.clientService.list();
  }

  detalheClient(id: any): void {
    this.router.navigate(['cliente/' + id]);
  }
}
