export type Product = {
  id: number,
  cod: string,
  stock: number,
  desc: string,
  price: number,
  ncm?: string
}

export type ProductCreate = Omit<Product, 'id'>;
