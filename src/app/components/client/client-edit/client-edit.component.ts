import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/types/Client.model';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit{

  id: string;
  cep: string = '';
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private formBuilder: FormBuilder
    ) {
      this.id = this.route.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      cpf: [null],
      fName: [null],
      lName: [null],
      dtNasc: [null],
      phone: [null],
      email: [null],
      whatsapp: [null],
      cep: [null],
      number: [null],
      street: [null],
      neighborhood: [null],
      state: [null],
      uf: [null]
    });

    this.getData();
  }

  salvarCliente(): void {
    let client: Client;
    if(this.form.value.cep == null &&
      (this.form.value.phone == null && this.form.value.whatsapp == null && this.form.value.email == null)) {
      client = {
        id: this.form.value.id,
        cpf: this.form.value.cpf,
        people: {
          fName: this.form.value.fName,
          lName: this.form.value.lName,
          dtNasc: this.form.value.dtNasc
        }
      }

      console.log("address null and contact null")
    } else if(this.form.value.cep == null) {
      client = {
        id: this.form.value.id,
        cpf: this.form.value.cpf,
        people:  {
          fName: this.form.value.fName,
          lName: this.form.value.lName,
          dtNasc: this.form.value.dtNasc,
          contact: {
            phone: this.form.value.phone,
            email: this.form.value.email,
            whatsapp: this.form.value.whatsapp
          }
        }
      }

      console.log("address null")
    } else if(this.form.value.cep != null &&
      (this.form.value.phone == null && this.form.value.whatsapp == null && this.form.value.email == null)) {
        client = {
          id: this.form.value.id,
          cpf: this.form.value.cpf,
          people:  {
            fName: this.form.value.fName,
            lName: this.form.value.lName,
            dtNasc: this.form.value.dtNasc,
            address: {
              cep: this.form.value.cep,
              number: this.form.value.number,
              street: this.form.value.street,
              neighborhood: this.form.value.neighborhood,
              state: this.form.value.state,
              uf: this.form.value.uf
            }
          }
        }

        console.log("contact null")
    } else {
      client = {
        id: this.form.value.id,
        cpf: this.form.value.cpf,
        people:  {
          fName: this.form.value.fName,
          lName: this.form.value.lName,
          dtNasc: this.form.value.dtNasc,
          contact: {
            phone: this.form.value.phone,
            email: this.form.value.email,
            whatsapp: this.form.value.whatsapp
          },
          address: {
            cep: this.form.value.cep,
            number: this.form.value.number,
            street: this.form.value.street,
            neighborhood: this.form.value.neighborhood,
            state: this.form.value.state,
            uf: this.form.value.uf
          }
        }
      }

      console.log("all")
    }

    //console.log(client);

    this.clientService.update(client).subscribe({
      next: () => this.router.navigate(['cliente']),
      error: console.log
    })
  }

  //pega o endereço apartir do cep pela api do viaCEP
  //https://viacep.com.br/
  addViaCep() {
    if(this.form.value.cep.length == 8) {
      this.clientService.getAddress(this.form.value.cep).subscribe({
        next: data => {
          this.form.patchValue({
            cep: data.cep.replace('-', ''),
            street: data.logradouro,
            neighborhood: data.bairro,
            state: data.localidade,
            uf: data.uf
          });
        },
        error: console.log
      })
    }
  }

  getData() {
    this.clientService.findById(this.id).subscribe(data => {
      this.form.patchValue({
        id: data.id,
        cpf: data.cpf,
        fName: data.people.fName,
        lName: data.people.lName,
        dtNasc: data.people.dtNasc,
        phone: data.people.contact?.phone,
        email: data.people.contact?.email,
        whatsapp: data.people.contact?.whatsapp,
        cep: data.people.address?.cep,
        number: data.people.address?.number,
        street: data.people.address?.street,
        neighborhood: data.people.address?.neighborhood,
        state: data.people.address?.state,
        uf: data.people.address?.uf
      })
    })
  }
}
