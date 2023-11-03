import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent{

  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    //pega o id da url
    this.id = this.route.snapshot.params['id'];
  }

  editarCliente(): void {
    this.router.navigate(['cliente/' + this.id + '/editar']);
  }

  deletarCliente(): void {

  }
}
