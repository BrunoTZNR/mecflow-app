import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Services, ServicesCreate } from '../types/Services.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManufactureService {

  private readonly API = 'api/v1/services';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Services[]>(this.API);
  }

  findById(id: string) {
    return this.httpClient.get<Services>(`${this.API}/${id}`);
  }

  save(record: ServicesCreate) {
    return this.httpClient.post<Services>(this.API, record).pipe(first());
  }

  update(record: Services) {
    return this.httpClient.put<Services>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete<void>(`${this.API}/${id}`).pipe(first());
  }
}
