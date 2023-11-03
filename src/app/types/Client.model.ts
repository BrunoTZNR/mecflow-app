import { People } from './People.model';

export type Client = {
  id: number,
  cpf?: string,
  people: People
}

export type ClientCreate = Omit<Client, 'id'>;
