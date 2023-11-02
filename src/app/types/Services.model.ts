export type Services = {
  id: number,
  desc: string,
  amount: number
}

export type ServicesCreate = Omit<Services, 'id'>;
