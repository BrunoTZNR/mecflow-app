import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ManufactureService } from 'src/app/services/manufacture.service';

@Component({
  selector: 'app-manufacture-cadastrar',
  templateUrl: './manufacture-cadastrar.component.html',
  styleUrls: ['./manufacture-cadastrar.component.scss']
})
export class ManufactureCadastrarComponent implements OnInit{

  form!: FormGroup;

  constructor(
    private router: Router,
    private serviceService: ManufactureService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      desc: [''],
      amount: [0]
    });
  }

  cadastrarServico(): void {
    this.serviceService.save(this.form.value).subscribe({
      next: () => this.router.navigate(['servico']),
      error: console.log
    })
  }
}
