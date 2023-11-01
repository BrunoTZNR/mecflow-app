import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { CarService } from './car.service';
import { ManufactureService } from './manufacture.service';
import { PaymentService } from './payment.service';
import { ProductService } from './product.service';
import { UserService } from './user.service';
import { Client } from '../types/Client.interface';
import { Os } from '../types/Os.interface';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class OsService {

  constructor(
    private clientService: ClientService,
    private carService: CarService,
    private userService: UserService,
    private productService: ProductService,
    private manufactureService: ManufactureService,
    private paymentService: PaymentService,
    private employeeService: EmployeeService
  ) { }

  getOs(id: number) {

  }

  getAllOs() {

  }
}
