import { Component, OnInit } from '@angular/core';
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
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }
}
