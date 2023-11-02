import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../types/Car.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly API = 'api/v1/cars'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Car[]>(this.API);
  }

  findByPlaca(placa: string) {
    return this.httpClient.get<Car>(`${this.API}/${placa}`);
  }

  save(record: Car) {
    return this.httpClient.post<Car>(this.API, record).pipe(first());
  }

  update(record: Car) {
    return this.httpClient.put<Car>(`${this.API}/${record.placa}`, record).pipe(first());
  }

  remove(placa: string) {
    return this.httpClient.delete<void>(`${this.API}/${placa}`).pipe(first());
  }
}
