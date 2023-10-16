export interface Payment {
  id?: number,
  amount: number,
  dtPay: string,
  typePay: string,
  qtdParcelas?: number,
  totalDiscount: number,
  status: string,
  idOs?: number
}
