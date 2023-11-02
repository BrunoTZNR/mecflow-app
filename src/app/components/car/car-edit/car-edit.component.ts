import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})
export class CarEditComponent implements OnInit{

  placa: string;

  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService,
    private formBuilder: FormBuilder
  ) {
    this.placa = this.route.snapshot.params['placa'];
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

    this.getData();
  }

  getData() {
    this.carService.findByPlaca(this.placa).subscribe({
      next: data => this.form.patchValue(data),
      error: console.log
    });
  }

  salvarCar(): void {
    this.carService.update(this.form.value).subscribe({
      next: data => this.router.navigate([`carro/${data.placa}`]),
      error: console.log
    });
  }
}
