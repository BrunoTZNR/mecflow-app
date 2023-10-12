import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/types/Car.interface';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit{

  id!: number;

  car!: Car;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {
    //pega o id da url
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.car = this.carService.getCar(Number(this.id) - 1);
    // console.log(this.car);
  }

  editarCar(): void {
    this.router.navigate(['carro/' + this.id + '/editar']);
  }

  deletarCar(): void {

  }
}
