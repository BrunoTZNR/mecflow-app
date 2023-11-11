import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-cadastrar',
  templateUrl: './car-cadastrar.component.html',
  styleUrls: ['./car-cadastrar.component.scss']
})
export class CarCadastrarComponent implements OnInit{

  form!: FormGroup;

  routerlink!: string;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if(this.route.snapshot.params['os'] === 'os') {
      this.routerlink = 'os/cadastrar';
    } else {
      this.routerlink = 'car';
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      placa: [''],
      fYear: [''],
      mYear: [''],
      automaker: [''],
      model: [''],
      color: [''],
      capacity: [''],
      engine: [''],
      fuel: ['gasolina']
    });
  }

  cadastrarCar(): void {
    this.carService.save(this.form.value).subscribe({
      next: () => this.router.navigate([this.routerlink]),
      error: console.log
    });


  }
}
