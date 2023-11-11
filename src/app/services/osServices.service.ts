import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OsServicesRequest, OsServicesResponse } from '../types/OsServices.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsServicesService {

  private readonly API = 'api/v1/osservices';

  constructor(private http: HttpClient) { }

  listByOs(os_id: string) {
    return this.http.get<OsServicesResponse[]>(`${this.API}/${os_id}`)
  }

  save(record: OsServicesRequest) {
    return this.http.post<OsServicesResponse>(this.API, record).pipe(first());
  }

  remove(os_id: string, service_id: string) {
    return this.http.delete<void>(`${this.API}/${os_id}/${service_id}`).pipe(first());
  }
}
