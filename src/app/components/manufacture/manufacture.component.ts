import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ManufactureService } from 'src/app/services/manufacture.service';
import { Services } from 'src/app/types/Services.model';

@Component({
  selector: 'app-manufacture',
  templateUrl: './manufacture.component.html',
  styleUrls: ['./manufacture.component.scss']
})
export class ManufactureComponent implements OnInit{

  services$: Observable<Services[]>;

  constructor(
    private router: Router,
    private servicesServices: ManufactureService
  ) {
    this.services$ = this.servicesServices.list();
  }

  ngOnInit(): void {

  }

  detalheServico(id: any): void {
    this.router.navigate(['servico/' + id]);
  }
}
