import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvanceService } from 'src/app/services/advance.service';

@Component({
  selector: 'app-advance-detail',
  templateUrl: './advance-detail.component.html',
  styleUrls: ['./advance-detail.component.scss']
})
export class AdvanceDetailComponent implements OnInit{

  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private advanceService: AdvanceService
  ) {
    //pega o id da url
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

  }

  editarAdvance(): void {
    this.router.navigate(['adiantamento/' + this.id + '/editar']);
  }

  deletarAdvance(): void {

  }
}
