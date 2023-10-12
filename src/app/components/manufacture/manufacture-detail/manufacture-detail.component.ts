import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufactureService } from 'src/app/services/manufacture.service';
import { Manufacture } from 'src/app/types/Manufacture.interface';

@Component({
  selector: 'app-manufacture-detail',
  templateUrl: './manufacture-detail.component.html',
  styleUrls: ['./manufacture-detail.component.scss']
})
export class ManufactureDetailComponent implements OnInit{

  id!: string;

  servico!: Manufacture;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private manufactureService: ManufactureService
  ) {
    //pega o id da url
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.servico = this.manufactureService.getManufacture(Number(this.id) - 1);
    // console.log(this.cliente);
  }

  editarServico(): void {
    this.router.navigate(['servico/' + this.id + '/editar']);
  }

  deletarServico(): void {

  }
}
