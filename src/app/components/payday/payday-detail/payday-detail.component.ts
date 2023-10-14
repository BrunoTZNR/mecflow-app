import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaydayService } from 'src/app/services/payday.service';
import { Payday } from 'src/app/types/Payday.interface';

@Component({
  selector: 'app-payday-detail',
  templateUrl: './payday-detail.component.html',
  styleUrls: ['./payday-detail.component.scss']
})
export class PaydayDetailComponent implements OnInit{

  id!: number;

  payday!: Payday;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paydayService: PaydayService
  ) {
    //pega o id da url
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.payday = this.paydayService.getPayday(Number(this.id) - 1);
    // console.log(this.payday);
  }

  editarPayday(): void {
    this.router.navigate(['pagamento/' + this.id + '/editar']);
  }

  deletarPayday(): void {

  }
}
