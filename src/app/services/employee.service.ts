import { Injectable } from '@angular/core';
import { Employee } from '../types/Employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(id: number): Employee {
    return this.getEmployees()[id];
  }

  getEmployees(): Employee[] {
    return [
      {
        id: 1,
        comission: 50,
        fname: 'Bruno',
        lname: 'Silva',
        dtNasc: '01/01/2003',
        phone: '61123456789',
        whatsapp: '61123456789',
        email: 'admin@admin.com',
        rua: 'aquela rua',
        casa: 'naquela casa',
        cep: '12345678'
      },
      {
        id: 2,
        comission: 100,
        fname: 'Marco',
        lname: 'Antonio',
        dtNasc: '01/01/2003',
        phone: '61123456789',
        whatsapp: '61123456789',
        email: 'admin@admin.com',
        rua: 'aquela rua',
        casa: 'naquela casa',
        cep: '12345678'
      },
      {
        id: 3,
        comission: 100,
        fname: 'Maria',
        lname: 'Silva',
        dtNasc: '01/01/2003',
        phone: '61123456789',
        whatsapp: '61123456789',
        email: 'admin@admin.com',
        rua: 'aquela rua',
        casa: 'naquela casa',
        cep: '12345678'
      },
      {
        id: 4,
        comission: 50,
        fname: 'Sérgio',
        lname: 'Henrique',
        dtNasc: '01/01/2003',
        phone: '61123456789',
        whatsapp: '61123456789',
        email: 'admin@admin.com',
        rua: 'aquela rua',
        casa: 'naquela casa',
        cep: '12345678'
      }
    ]
  }
}
