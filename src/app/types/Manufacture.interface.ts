import { Employee } from "./Employee.interface";

export interface Manufacture {
  id?: number,
  desc: string,
  amount: number,
  discount?: number,
  employee?: Employee
}
