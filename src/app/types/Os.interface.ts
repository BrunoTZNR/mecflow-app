import { Car } from "./Car.model";
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
  car: Car,
  User: User,
  //products: Product[],
  payment: Payment[]
}
