import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OsRequest, OsResponse } from '../types/Os.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsService {

  private readonly API = 'api/v1/os';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<OsResponse[]>(this.API);
  }

  findById(id: string) {
    return this.http.get<OsResponse>(`${this.API}/${id}`);
  }

  save(record: OsRequest) {
    return this.http.post<OsResponse>(this.API, record).pipe(first());
  }

  update(record: OsRequest) {
    return this.http.put<OsResponse>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.http.delete<void>(`${this.API}/${id}`).pipe(first());
  }
}
