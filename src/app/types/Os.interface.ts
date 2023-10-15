import { Car } from "./Car.interface";
import { Client } from "./Client.interface";
import { Manufacture } from "./Manufacture.interface";
import { Payment } from "./Payment.interface";
import { Product } from "./Product.interface";
import { User } from "./User.interface";


export interface Os {
  id?: number,
  dtCad: string,
  dtIn: string,
  dtOut: string,
  totalAmount: number,
  totalDiscount: number,
  idStatus: number,
  status: string,
  client: Client,
  car: Car,
  User: User,
  products: Product[],
  services: Manufacture[],
  payment: Payment[]
}
