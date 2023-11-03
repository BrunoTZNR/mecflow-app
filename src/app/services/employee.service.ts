import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, EmployeeCreate } from '../types/Employee.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly API = 'api/v1/employees';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Employee[]>(this.API);
  }

  findById(id: string) {
    return this.http.get<Employee>(`${this.API}/${id}`).pipe(first())
  }

  save(record: EmployeeCreate) {
    return this.http.post<Employee>(this.API, record).pipe(first());
  }

  update(record: Employee) {
    return this.http.put<Employee>(`${this.API}/${record.id}`, record).pipe(first());
  }

  delete(id: string) {
    return this.http.delete<void>(`${this.API}/${id}`).pipe(first());
  }
}
