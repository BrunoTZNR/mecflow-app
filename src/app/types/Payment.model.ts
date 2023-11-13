export type Payment = {
  id: number,
  amount: number,
  dt: string,
  typePay: string,
  installments: number,
  os_id: number
}

export type PaymentCreate = Omit<Payment, 'id'>;
