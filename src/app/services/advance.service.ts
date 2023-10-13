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
        date: '12/10/2023',
        amount: 100,
        idEmployee: 3,
        nameEmployee: 'Bruno'
      },
      {
        id: 2,
        date: '01/10/2023',
        amount: 200,
        idEmployee: 1,
        nameEmployee: 'Bruno'
      }
    ]
  }
}
