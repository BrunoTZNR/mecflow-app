import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.scss']
})
export class PaymentEditComponent implements OnInit{

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

  }

  salvarPayment(): void {
    //chamar api post
  }
}
