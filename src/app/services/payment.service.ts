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
        dtPay: '12/10/2023',
        typePay: 'pix',
        qtdParcelas: 1
      },
      {
        id: 2,
        amount: 1900.00,
        dtPay: '09/10/2023',
        typePay: 'crédito',
        qtdParcelas: 10
      },
      {
        id: 3,
        amount: 60,
        dtPay: '05/10/2023',
        typePay: 'débito',
        qtdParcelas: 1
      },
      {
        id: 4,
        amount: 150,
        dtPay: '10/10/2023',
        typePay: 'dinheiro',
        qtdParcelas: 1
      }
    ]
  }
}
