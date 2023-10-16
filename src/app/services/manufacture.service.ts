import { Injectable } from '@angular/core';
import { Manufacture } from '../types/Manufacture.interface';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class ManufactureService {

  constructor(
    private employeeService: EmployeeService
  ) { }

  getManufacture(id: number): Manufacture {
    return this.getManufactures()[id];
  }

  getManufactures(): Manufacture[] {
    return [
      {
        id: 1,
        desc: 'Aquele serviço',
        amount: 50.00,
        discount: 0,
        employee: this.employeeService.getEmployee(0)
      },
      {
        id: 2,
        desc: 'Serviços diversos',
        amount: 150.00,
        discount: 0,
        employee: this.employeeService.getEmployee(0)
      },
      {
        id: 3,
        desc: 'Alinhamento',
        amount: 60.00,
        discount: 0,
        employee: this.employeeService.getEmployee(0)
      },
      {
        id: 4,
        desc: 'Balanceamento',
        amount: 60.00,
        discount: 0,
        employee: this.employeeService.getEmployee(0)
      },
    ]
  }
}
