import { Employee } from "./Employee.model"

export type Advance = {
  id: number,
  dt: string,
  amount: number,
  status: string,
  employee: Employee
}

export type AdvanceCreate = {
  id?: number
  dt: string,
  amount: number,
  status: string,
  employee_id: number
};
