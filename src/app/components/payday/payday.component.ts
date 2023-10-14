import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaydayService } from 'src/app/services/payday.service';
import { Payday } from 'src/app/types/Payday.interface';

@Component({
  selector: 'app-payday',
  templateUrl: './payday.component.html',
  styleUrls: ['./payday.component.scss']
})
export class PaydayComponent implements OnInit{

  paydays: Payday[] = [];

  constructor(
    private paydayService: PaydayService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paydays = this.paydayService.getPaydays();
  }

  detalhePayday(id: any): void {
    this.router.navigate(['pagamento/' + id]);
  }
}
