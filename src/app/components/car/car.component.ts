import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/types/Car.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit{

  cars: Car[] = [];

  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  detalheCar(id: any): void {
    this.router.navigate(['carro/' + id])
  }
}
