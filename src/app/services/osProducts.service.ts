import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OsProductsRequest, OsProductsResponse } from '../types/OsProducts.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsProductsService {

  private readonly API = 'api/v1/osproducts';

  constructor(private http: HttpClient) { }

  listByOs(os_id: string) {
    return this.http.get<OsProductsResponse[]>(`${this.API}/${os_id}`)
  }

  save(record: OsProductsRequest) {
    return this.http.post<OsProductsResponse>(this.API, record).pipe(first());
  }

  remove(os_id: string, product_id: string) {
    return this.http.delete<void>(`${this.API}/${os_id}/${product_id}`).pipe(first());
  }
}
