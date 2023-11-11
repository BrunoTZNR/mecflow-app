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
  id: number,
  product_id: number,
  amount: number,
  quantity: number,
  discount: number,
  employee_id: number
}
