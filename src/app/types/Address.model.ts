export type Address = {
  id: number,
  cep: string,
  number?: string,
  street?: string,
  neighborhood?: string,
  state?: string,
  uf?: string
}

export type AddressCreate = Omit<Address, 'id'>;
