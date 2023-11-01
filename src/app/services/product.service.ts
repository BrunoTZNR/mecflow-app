import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductCreate } from '../types/Product.model';
import { Observable, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly API = 'api/v1/products';

  constructor(private httpClient: HttpClient) {  }

  list() {
    return this.httpClient.get<Product[]>(this.API)
      .pipe(
        tap(products => console.log(products))
      );
  }

  findById(id: string) {
    return this.httpClient.get<Product>(`${this.API}/${id}`);
    // return this.httpClient.get<Product>(this.API);
  }

  save(record: Partial<ProductCreate>) {
    // console.log(record)
    return this.httpClient.post<Product>(this.API, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete<void>(`${this.API}/${id}`).pipe(first());
  }
}
