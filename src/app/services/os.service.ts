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

  getOs(id: number): Os {
    return this.getAllOs()[id];
  }

  getAllOs(): Os[] {
    return [
      {
        id: 1,
        dtCad: '2023-10-14',
        dtIn: '2023-10-14',
        dtOut: '2023-10-14',
        totalAmount: 60,
        totalDiscount: 0,
        idStatus: 1,
        status: 'pago',
        client: this.clientService.getClient(0),
        car: this.carService.getCar(0),
        User: this.userService.getUser(0),
        products: [
          {
            id: 1,
            cod: 'cod',
            stock: 2,
            desc: 'produto bom',
            price: 10.00,
            ncm: '',
            qtdProducts: 2,
            discountAmount: 0.00,
            totalAmount: 20.00,
            employee: this.employeeService.getEmployee(0)
          }
        ],
        services: [
          {
            id: 1,
            desc: 'serviço com produto bom',
            amount: 50,
            discount: 10,
            employee: this.employeeService.getEmployee(0)
          }
        ],
        payment: [
          this.paymentService.getPayment(1)
        ]
      },
      {
        id: 2,
        dtCad: '2023-10-14',
        dtIn: '2023-10-14',
        dtOut: '2023-10-14',
        totalAmount: 300,
        totalDiscount: 0,
        idStatus: 1,
        status: 'pago',
        client: this.clientService.getClient(2),
        car: this.carService.getCar(1),
        User: this.userService.getUser(0),
        products: [
          {
            id: 1,
            cod: 'cod',
            stock: 2,
            desc: 'produto bom',
            price: 10.00,
            ncm: '',
            qtdProducts: 2,
            discountAmount: 0.00,
            totalAmount: 20.00,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 2,
            cod: 'codwef',
            stock: 4,
            desc: 'produto bom e ruim',
            price: 40.00,
            ncm: '',
            qtdProducts: 4,
            discountAmount: 0.00,
            totalAmount: 160,
            employee: this.employeeService.getEmployee(1)
          },
          {
            id: 3,
            cod: 'cod',
            stock: 2,
            desc: 'produto bom',
            price: 10.00,
            ncm: '',
            qtdProducts: 2,
            discountAmount: 0.00,
            totalAmount: 20.00,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 4,
            cod: 'codwef',
            stock: 4,
            desc: 'produto bom e ruim',
            price: 40.00,
            ncm: '',
            qtdProducts: 4,
            discountAmount: 0.00,
            totalAmount: 160,
            employee: this.employeeService.getEmployee(1)
          },
          {
            id: 1,
            cod: 'cod',
            stock: 2,
            desc: 'produto bom',
            price: 10.00,
            ncm: '',
            qtdProducts: 2,
            discountAmount: 0.00,
            totalAmount: 20.00,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 2,
            cod: 'codwef',
            stock: 4,
            desc: 'produto bom e ruim',
            price: 40.00,
            ncm: '',
            qtdProducts: 4,
            discountAmount: 0.00,
            totalAmount: 160,
            employee: this.employeeService.getEmployee(1)
          },
          {
            id: 3,
            cod: 'cod',
            stock: 2,
            desc: 'produto bom',
            price: 10.00,
            ncm: '',
            qtdProducts: 2,
            discountAmount: 0.00,
            totalAmount: 20.00,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 4,
            cod: 'codwef',
            stock: 4,
            desc: 'produto bom e ruim',
            price: 40.00,
            ncm: '',
            qtdProducts: 4,
            discountAmount: 0.00,
            totalAmount: 160,
            employee: this.employeeService.getEmployee(1)
          },
          {
            id: 1,
            cod: 'cod',
            stock: 2,
            desc: 'produto bom',
            price: 10.00,
            ncm: '',
            qtdProducts: 2,
            discountAmount: 0.00,
            totalAmount: 20.00,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 2,
            cod: 'codwef',
            stock: 4,
            desc: 'produto bom e ruim',
            price: 40.00,
            ncm: '',
            qtdProducts: 4,
            discountAmount: 0.00,
            totalAmount: 160,
            employee: this.employeeService.getEmployee(1)
          },
          {
            id: 3,
            cod: 'cod',
            stock: 2,
            desc: 'produto bom',
            price: 10.00,
            ncm: '',
            qtdProducts: 2,
            discountAmount: 0.00,
            totalAmount: 20.00,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 4,
            cod: 'codwef',
            stock: 4,
            desc: 'produto bom e ruim',
            price: 40.00,
            ncm: '',
            qtdProducts: 4,
            discountAmount: 0.00,
            totalAmount: 160,
            employee: this.employeeService.getEmployee(1)
          }
        ],
        services: [
          {
            id: 1,
            desc: 'serviço com produto bom',
            amount: 50,
            discount: 10,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 2,
            desc: 'serviço com produto bom e ruim',
            amount: 80,
            discount: 0,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 3,
            desc: 'serviço com produto bom',
            amount: 50,
            discount: 10,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 4,
            desc: 'serviço com produto bom e ruim',
            amount: 80,
            discount: 0,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 1,
            desc: 'serviço com produto bom',
            amount: 50,
            discount: 10,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 2,
            desc: 'serviço com produto bom e ruim',
            amount: 80,
            discount: 0,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 3,
            desc: 'serviço com produto bom',
            amount: 50,
            discount: 10,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 4,
            desc: 'serviço com produto bom e ruim',
            amount: 80,
            discount: 0,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 1,
            desc: 'serviço com produto bom',
            amount: 50,
            discount: 10,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 2,
            desc: 'serviço com produto bom e ruim',
            amount: 80,
            discount: 0,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 3,
            desc: 'serviço com produto bom',
            amount: 50,
            discount: 10,
            employee: this.employeeService.getEmployee(0)
          },
          {
            id: 4,
            desc: 'serviço com produto bom e ruim',
            amount: 80,
            discount: 0,
            employee: this.employeeService.getEmployee(0)
          }
        ],
        payment: [
          this.paymentService.getPayment(1)
        ]
      }
    ]
  }
}
