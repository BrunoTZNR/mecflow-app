import { OsService } from 'src/app/services/os.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/types/Payment.interface';
import { Os } from 'src/app/types/Os.interface';

@Component({
  selector: 'app-payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.scss']
})
export class PaymentEditComponent implements OnInit{

  idOs!: number;
  id!: number;

  os!: Os;

  selectedType!: string;
  selectedStatus!: string;

  constructor(
    private osService: OsService,
    private route: ActivatedRoute
  ) {
    this.idOs = Number(this.route.snapshot.params['id-os']);
    this.id = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.os = this.osService.getOs(this.idOs - 1);

    this.selectedType = this.os.payment[0].typePay;
    this.selectedStatus = this.os.payment[0].status;

    console.log(this.os);
  }

  salvarPayment(): void {
    //chamar api post
  }
}
