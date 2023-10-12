import { Injectable } from '@angular/core';
import { Payday } from '../types/Payday.interface';

@Injectable({
  providedIn: 'root'
})
export class PaydayService {

  constructor() { }

  getPayday(id: number): Payday {
    return this.getPaydays()[id];
  }

  getPaydays(): Payday[] {
    return [
      {
        id: 1,
        dtIn: '01/10/2023',
        dtOut: '15/10/2023',
        amount: 600.00,
        amountCom: 95,
        amountAd: 30,
        idEmployee: 1,
        nameEmployee: 'Bruno',
        status: 'pendente'
      },
      {
        id: 1,
        dtIn: '15/09/2023',
        dtOut: '30/09/2023',
        amount: 600.00,
        amountCom: 300,
        amountAd: 0,
        idEmployee: 1,
        nameEmployee: 'Bruno',
        status: 'pago'
      }
    ]
  }
}
