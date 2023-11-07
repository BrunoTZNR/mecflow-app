import { Car } from "./Car.model"
import { Client } from "./Client.model"

export type OsRequest = {
  id?: number,
  dtIn: string,
  dtOut: string,
  totalAmount?: number,
  totalDiscount?: number,
  status: string,
  client_id: number,
  car_id: string
}

export type OsResponse = {
  id: number,
  dtIn: string,
  dtOut: string,
  totalAmount: number,
  totalDiscount: number,
  status: string,
  client: Client,
  car: Car
}
