import { Product } from "./Product.model"

export type OsProductsResponse = {
  id_os: number,
  product: Product,
  amount: number,
  quantity: number,
  discount: number,
  employee_id: number
}

export type OsProductsRequest = {
  id_os: number,
  id_product: number,
  amount: number,
  quantity: number,
  discount: number,
  employee_id: number
}
