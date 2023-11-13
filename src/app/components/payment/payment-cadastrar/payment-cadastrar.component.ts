import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-cadastrar',
  templateUrl: './payment-cadastrar.component.html',
  styleUrls: ['./payment-cadastrar.component.scss']
})
export class PaymentCadastrarComponent implements OnInit{

  id: string;

  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private payService: PaymentService,
    private formBuilder: FormBuilder
  ) {
    this.id = this.route.snapshot.params['id-os'];
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      os_id: this.id,
      amount: [null],
      dt: [null],
      typePay: [null],
      installments: [1]
    });
  }

  cadastrarPayment(): void {
    console.log(this.form.value);

    this.payService.save(this.form.value).subscribe({
      next: () => this.router.navigate(['os/' + this.id + '/editar']),
      error: e => console.log(e.error)
    })
  }
}
