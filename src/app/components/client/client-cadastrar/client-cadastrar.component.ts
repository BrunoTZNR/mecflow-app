import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ClientCreate } from 'src/app/types/Client.model';

@Component({
  selector: 'app-client-cadastrar',
  templateUrl: './client-cadastrar.component.html',
  styleUrls: ['./client-cadastrar.component.scss']
})
export class ClientCadastrarComponent implements OnInit{

  cep: string = '';

  form!: FormGroup;

  constructor(
    private router: Router,
    private clientService: ClientService,
    private formBuilder: FormBuilder
    ) {
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cpf: ['01234567890'],
      fName: ['Bruno'],
      lName: ['silva'],
      dtNasc: ['2003-01-01'],
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
  }

  cadastrarCliente(): void {
    let client: ClientCreate;
    if(this.form.value.cep == null &&
      (this.form.value.phone == null && this.form.value.whatsapp == null && this.form.value.email == null)) {
      client = {
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

    console.log(client);

    this.clientService.save(client).subscribe({
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
}
