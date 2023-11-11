import { Services } from "./Services.model";

export type OsServicesResponse = {
  id_os: number,
  service: Services,
  amount: number,
  quantity: number,
  discount: number,
  employee_id: number
}

export type OsServicesRequest = {
  id_os: number,
  services_id: number,
  amount: number,
  quantity: number,
  discount: number,
  employee_id: number
}
