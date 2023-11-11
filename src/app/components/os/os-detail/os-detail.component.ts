import { OsResponse } from 'src/app/types/Os.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OsService } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-detail',
  templateUrl: './os-detail.component.html',
  styleUrls: ['./os-detail.component.scss']
})
export class OsDetailComponent{

  id: string;

  os$: Observable<OsResponse>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private osService: OsService
  ) {
    this.id = this.route.snapshot.params['id'];

    this.os$ = this.osService.findById(this.id);
  }

  //serviços
  cadastrarServicoOs(): void {
    this.router.navigate(['servico/cadastrar/' + this.id])
  }

  detalheServicoOs(): void {

  }
  //---------------------------------

  //produto
  cadastrarProdutoOs(): void {
    this.router.navigate(['produto/cadastrar/' + this.id])
  }

  detalheProdutoOs(): void {

  }

  //pagamento
  cadastrarPagamentoOs(): void {
    this.router.navigate(['pagamento-os/cadastrar/' + this.id])
  }

  detalhePagamentoOs(): void {

  }
  //---------------------------------

  editarOs(): void {
    this.router.navigate(['os/' + this.id + '/editar'])
  }

  deletarOs(): void {

  }
}
