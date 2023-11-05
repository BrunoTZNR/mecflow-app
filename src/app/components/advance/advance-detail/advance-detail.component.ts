import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdvanceService } from 'src/app/services/advance.service';
import { Advance } from 'src/app/types/Advance.model';

@Component({
  selector: 'app-advance-detail',
  templateUrl: './advance-detail.component.html',
  styleUrls: ['./advance-detail.component.scss']
})
export class AdvanceDetailComponent{

  id: string;

  advance$: Observable<Advance>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private advanceService: AdvanceService
  ) {
    //pega o id da url
    this.id = this.route.snapshot.params['id'];

    this.advance$ = this.advanceService.findById(this.id);
  }

  editarAdvance(): void {
    this.router.navigate(['adiantamento/' + this.id + '/editar']);
  }

  deletarAdvance(): void {
    this.advanceService.remove(this.id).subscribe({
      next: () => this.router.navigate(['adiantamento']),
      error: error => console.log(error.error)
    });
  }
}
