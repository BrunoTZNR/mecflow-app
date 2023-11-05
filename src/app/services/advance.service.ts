import { Injectable } from '@angular/core';
import { Advance, AdvanceCreate } from '../types/Advance.model';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../types/Employee.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvanceService {

  private readonly API = 'api/v1/advances';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Advance[]>(this.API);
  }

  listOfEmployee(id_emp: string) {
    return this.http.get<Advance[]>(`${this.API}/employee/${id_emp}`);
  }

  findById(id: string) {
    return this.http.get<Advance>(`${this.API}/${id}`);
  }

  save(record: AdvanceCreate) {
    return this.http.post<Advance>(this.API, record).pipe(first());
  }

  update(record: Advance) {
    return this.http.put<Advance>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.http.delete<void>(`${this.API}/${id}`).pipe(first());
  }
}
