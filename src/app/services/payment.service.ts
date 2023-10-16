import { Injectable } from '@angular/core';
import { Payment } from '../types/Payment.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  getPayment(id: number): Payment {
    return this.getPayments()[id];
  }

  getPayments(): Payment[] {
    return [
      {
        id: 1,
        amount: 600,
        dtPay: '2023-10-12',
        typePay: 'pix',
        qtdParcelas: 1,
        totalDiscount: 0,
        status: 'pago',
        idOs: 1
      },
      {
        id: 2,
        amount: 1900.00,
        dtPay: '2023-09-10',
        typePay: 'credito',
        qtdParcelas: 10,
        totalDiscount: 0,
        status: 'pendente',
        idOs: 2
      },
      {
        id: 3,
        amount: 60,
        dtPay: '2023-10-05',
        typePay: 'debito',
        qtdParcelas: 1,
        totalDiscount: 0,
        status: 'cancelado',
        idOs: undefined
      },
      {
        id: 4,
        amount: 150,
        dtPay: '2023-10-10',
        typePay: 'dinheiro',
        qtdParcelas: 1,
        totalDiscount: 0,
        status: 'cancelado',
        idOs: undefined
      }
    ]
  }
}
