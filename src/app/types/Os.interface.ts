import { Car } from "./Car.model";
import { Client } from "./Client.interface";
import { Payment } from "./Payment.interface";
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
  //products: Product[],
  payment: Payment[]
}
