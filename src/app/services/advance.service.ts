import { Injectable } from '@angular/core';
import { Advance } from '../types/Advance.interface';

@Injectable({
  providedIn: 'root'
})
export class AdvanceService {

  constructor() { }

  getAdvance(id: number): Advance {
    return this.getAdvances()[id];
  }

  getAdvances(): Advance[] {
    return [
      {
        id: 1,
        dtIn: '12/10/2023',
        dtOut: '12/10/2023',
        amount: 100,
        idEmployee: 1,
        nameEmployee: 'Bruno',
        status: 'pago'
      },
      {
        id: 2,
        dtIn: '01/10/2023',
        dtOut: '01/10/2023',
        amount: 200,
        idEmployee: 1,
        nameEmployee: 'Bruno',
        status: 'pago'
      }
    ]
  }
}
