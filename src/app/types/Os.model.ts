import { Car } from "./Car.model"
import { Client } from "./Client.model"
import { OsProductsResponse } from "./OsProducts.model"
import { OsServicesResponse } from "./OsServices.model"

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
  car: Car,
  osProducts?: OsProductsResponse[],
  osServices?: OsServicesResponse[]
}
