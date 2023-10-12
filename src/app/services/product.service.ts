import { Injectable } from '@angular/core';
import { Product } from '../types/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct(id: number): Product {
    return this.getProducts()[id];
  }

  getProducts(): Product[] {
    return [
      {
        id: 1,
        cod: 'AAA0123',
        stock: 10,
        desc: 'Peças de carros variados',
        price: 999.99,
        ncm: '1234567890'
      },
      {
        id: 2,
        cod: 'BBB4567',
        stock: 20,
        desc: 'Aquela peça ali',
        price: 0.00,
        ncm: '1234567890'
      },
      {
        id: 3,
        cod: 'C01586',
        stock: 999,
        desc: 'Outra peça',
        price: 10.00,
        ncm: '1234567890'
      },
      {
        id: 4,
        cod: 'BRKSHF8742',
        stock: 0,
        desc: 'Água',
        price: 150.50,
        ncm: '1234567890'
      }
    ]
  }
}
