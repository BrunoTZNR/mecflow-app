import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManufactureService } from 'src/app/services/manufacture.service';
import { Manufacture } from 'src/app/types/Manufacture.interface';

@Component({
  selector: 'app-manufacture',
  templateUrl: './manufacture.component.html',
  styleUrls: ['./manufacture.component.scss']
})
export class ManufactureComponent implements OnInit{

  servicos!: Manufacture[];

  constructor(
    private manufactureService: ManufactureService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.servicos = this.manufactureService.getManufactures();
  }

  detalheServico(id: any): void {
    this.router.navigate(['servico/' + id]);
  }
}
