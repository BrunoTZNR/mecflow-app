import { Injectable } from '@angular/core';
import { Manufacture } from '../types/Manufacture.interface';

@Injectable({
  providedIn: 'root'
})
export class ManufactureService {

  constructor() { }

  getManufacture(id: number): Manufacture {
    return this.getManufactures()[id];
  }

  getManufactures(): Manufacture[] {
    return [
      {
        id: 1,
        desc: 'Aquele serviço',
        amount: 50.00
      },
      {
        id: 2,
        desc: 'Serviços diversos',
        amount: 150.00
      },
      {
        id: 3,
        desc: 'Alinhamento',
        amount: 60.00
      },
      {
        id: 4,
        desc: 'Balanceamento',
        amount: 60.00
      },
    ]
  }
}
