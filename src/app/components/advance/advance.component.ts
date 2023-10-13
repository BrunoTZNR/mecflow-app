import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvanceService } from 'src/app/services/advance.service';
import { Advance } from 'src/app/types/Advance.interface';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit{

  advances: Advance[] = [];

  constructor(
    private advanceService: AdvanceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.advances = this.advanceService.getAdvances();
  }

  detalheAdvance(id: any): void {
    this.router.navigate(['adiantamento/' + id]);
  }
}
