import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManufactureService } from 'src/app/services/manufacture.service';
import { Manufacture } from 'src/app/types/Manufacture.interface';

@Component({
  selector: 'app-manufacture-edit',
  templateUrl: './manufacture-edit.component.html',
  styleUrls: ['./manufacture-edit.component.scss']
})
export class ManufactureEditComponent implements OnInit{

  id!: string;

  servico!: Manufacture;

  constructor(
    private manufactureService: ManufactureService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.servico = this.manufactureService.getManufacture(Number(this.id) - 1);
    console.log(this.servico);

  }

  salvarServico(): void {

  }
}
