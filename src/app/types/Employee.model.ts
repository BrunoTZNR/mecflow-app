import { People } from "./People.model";

export type Employee = {
  id: number,
  salary: number,
  comission: number,
  people: People
}

export type EmployeeCreate = Omit<Employee, 'id'>;
