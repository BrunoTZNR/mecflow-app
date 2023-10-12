import { Injectable } from '@angular/core';
import { Client } from '../types/Client.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClient(id: number): Client {
    return this.getClients()[id];
  }

  getClients(): Client[] {
    return [
      {
        id: 1,
        cpf: '12345678901',
        fname: 'Bruno',
        lname: 'Silva',
        dtNasc: '01/01/2003',
        phone: '61123456789',
        whatsapp: '61123456789',
        email: 'admin@admin.com',
        rua: 'aquela rua',
        casa: 'naquela casa',
        cep: '12345678'
      },
      {
        id: 2,
        cpf: '12345678901',
        fname: 'Bianca',
        lname: 'Chagas',
        dtNasc: '14/09/2003',
        phone: '61123456789',
        whatsapp: '61123456789',
        email: 'admin@admin.com',
        rua: 'aquela rua',
        casa: 'naquela casa',
        cep: '12345678'
      },
      {
        id: 3,
        cpf: '12345678901',
        fname: 'Renan',
        lname: 'Rocha',
        dtNasc: '11/01/2003',
        phone: '61123456789',
        whatsapp: '61123456789',
        email: 'admin@admin.com',
        rua: 'aquela rua',
        casa: 'naquela casa',
        cep: '12345678'
      },
      {
        id: 4,
        cpf: '12345678901',
        fname: 'Italo',
        lname: 'Oliveira',
        dtNasc: '06/01/2003',
        phone: '61123456789',
        whatsapp: '61123456789',
        email: 'admin@admin.com',
        rua: 'aquela rua',
        casa: 'naquela casa',
        cep: '12345678'
      }
    ]
  }
}
