import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-os-detail',
  templateUrl: './os-detail.component.html',
  styleUrls: ['./os-detail.component.scss']
})
export class OsDetailComponent implements OnInit{

  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

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
