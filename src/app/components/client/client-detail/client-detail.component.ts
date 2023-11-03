import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Observable } from 'rxjs';
import { Client } from 'src/app/types/Client.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent{

  id: string;

  client$: Observable<Client>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {
    //pega o id da url
    this.id = this.route.snapshot.params['id'];

    this.client$ = this.clientService.findById(this.id);
  }

  editarCliente(): void {
    this.router.navigate(['cliente/' + this.id + '/editar']);
  }

  deletarCliente(): void {
    this.clientService.remove(this.id).subscribe({
      next: () => this.router.navigate(['cliente']),
      error: console.log
    });
  }
}
