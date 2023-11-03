import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-os-edit',
  templateUrl: './os-edit.component.html',
  styleUrls: ['./os-edit.component.scss']
})
export class OsEditComponent implements OnInit{

  id: string;

  constructor(
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
