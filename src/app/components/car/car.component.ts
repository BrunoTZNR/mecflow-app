import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/types/Car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit{

  cars$: Observable<Car[]>;

  constructor(
    private router: Router,
    private carService: CarService
  ) {
    this.cars$ = this.carService.list();
  }

  ngOnInit(): void {

  }

  detalheCar(id: string): void {
    this.router.navigate(['carro/' + id])
  }
}
