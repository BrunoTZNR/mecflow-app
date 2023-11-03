import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-cadastrar',
  templateUrl: './payment-cadastrar.component.html',
  styleUrls: ['./payment-cadastrar.component.scss']
})
export class PaymentCadastrarComponent implements OnInit{

  idOs: string;

  constructor(
    private route: ActivatedRoute
  ) {
    this.idOs = this.route.snapshot.params['id-os'];
  }

  ngOnInit(): void {

  }

  cadastrarPayment(): void {
    //chamar api post
  }
}
