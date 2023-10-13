import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvanceService } from 'src/app/services/advance.service';
import { Advance } from 'src/app/types/Advance.interface';

@Component({
  selector: 'app-advance-detail',
  templateUrl: './advance-detail.component.html',
  styleUrls: ['./advance-detail.component.scss']
})
export class AdvanceDetailComponent implements OnInit{

  id!: number;

  advance!: Advance;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private advanceService: AdvanceService
  ) {
    //pega o id da url
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.advance = this.advanceService.getAdvance(Number(this.id) - 1);
    // console.log(this.advance);
  }

  editarAdvance(): void {
    this.router.navigate(['adiantamento/' + this.id + '/editar']);
  }

  deletarAdvance(): void {

  }
}
