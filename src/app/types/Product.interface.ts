import { Employee } from "./Employee.interface";

export interface Product {
  id?: number,
  cod: string,
  stock: number,
  desc: string,
  price: number,
  ncm?: string,
  qtdProducts?: number,
  discountAmount?: number,
  totalAmount?: number,
  employee?: Employee
}
