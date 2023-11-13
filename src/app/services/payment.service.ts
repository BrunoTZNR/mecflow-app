import { Injectable } from '@angular/core';
import { Payment, PaymentCreate } from '../types/Payment.model';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private readonly API = 'api/v1/payments';

  constructor(private http: HttpClient) { }

  list(id: string) {
    return this.http.get<Payment[]>(`${this.API}/${id}`);
  }

  findById(id: string) {
    return this.http.get<Payment>(`${this.API}/${id}`);
  }

  save(record: PaymentCreate) {
    return this.http.post<Payment>(this.API, record).pipe(first());
  }

  update(record: Payment) {
    return this.http.put<Payment>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.http.delete<void>(`${this.API}/${id}`).pipe(first());
  }
}
