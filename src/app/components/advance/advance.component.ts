import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdvanceService } from 'src/app/services/advance.service';
import { Advance } from 'src/app/types/Advance.model';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit{

  advances$: Observable<Advance[]>

  constructor(
    private advanceService: AdvanceService,
    private router: Router
  ) {
    this.advances$ = this.advanceService.list();
  }

  ngOnInit(): void {

  }

  detalheAdvance(id: any): void {
    this.router.navigate(['adiantamento/' + id]);
  }
}
