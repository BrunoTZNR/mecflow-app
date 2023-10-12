import { Injectable } from '@angular/core';
import { Car } from '../types/Car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCar(id: number): Car {
    return this.getCars()[id];
  }

  getCars(): Car[] {
    return [
      {
        id: 'AAA9999',
        model: 'doblo adventure',
        engine: 16,
        comb: 'flex',
        automaker: 'fiat',
        capacity: 1.8,
        fYear: '2010',
        mYear: '2011',
        color: 'prata'
      },
      {
        id: 'BBB0000',
        model: 'j2',
        engine: 16,
        comb: 'gasolina',
        automaker: 'jac motors',
        capacity: 1.4,
        fYear: '2013',
        mYear: '2014',
        color: 'grena'
      },
      {
        id: 'CCC9876',
        model: 'gol g5',
        engine: 8,
        comb: 'flex',
        automaker: 'volkswagem',
        capacity: 1.0,
        fYear: '2011',
        mYear: '2011',
        color: 'prata'
      },
      {
        id: 'FVC6669',
        model: 'uno',
        engine: 8,
        comb: 'flex',
        automaker: 'fiat',
        capacity: 1.0,
        fYear: '2005',
        mYear: '2006',
        color: 'vermelho'
      }
    ]
  }
}
