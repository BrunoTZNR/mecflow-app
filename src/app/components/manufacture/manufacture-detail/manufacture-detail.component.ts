import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ManufactureService } from 'src/app/services/manufacture.service';
import { Services } from 'src/app/types/Services.model';

@Component({
  selector: 'app-manufacture-detail',
  templateUrl: './manufacture-detail.component.html',
  styleUrls: ['./manufacture-detail.component.scss']
})
export class ManufactureDetailComponent{

  id: string;

  service$: Observable<Services>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicesService: ManufactureService
  ) {
    this.id = route.snapshot.params['id'];

    this.service$ = this.servicesService.findById(this.id);
  }

  editarServico(): void {
    this.router.navigate(['servico/' + this.id + '/editar']);
  }

  deletarServico(): void {
    this.servicesService.remove(this.id).subscribe({
      next: () => this.router.navigate(['servico']),
      error: console.log
    })
  }
}
