import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, ClientCreate } from '../types/Client.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly API = 'api/v1/clients';

  constructor(private http: HttpClient) { }

  getAddress(cep: string) {
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`)
  }

  list() {
    return this.http.get<Client[]>(this.API);
  }

  findById(id: string) {
    return this.http.get<Client>(`${this.API}/${id}`);
  }

  save(record: ClientCreate) {
    return this.http.post<Client>(this.API, record).pipe(first());
  }

  update(record: Client) {
    return this.http.put<Client>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.http.delete<void>(`${this.API}/${id}`).pipe(first());
  }
}
