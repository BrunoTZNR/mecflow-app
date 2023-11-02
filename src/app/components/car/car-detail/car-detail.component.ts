import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/types/Car.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit{

  placa: string;

  car$: Observable<Car>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {
    //pega o id da url
    this.placa = this.route.snapshot.params['placa'];

    this.car$ = this.carService.findByPlaca(this.placa);
  }

  ngOnInit(): void {}

  editarCar(): void {
    this.router.navigate(['carro/' + this.placa + '/editar']);
  }

  deletarCar(): void {
    this.carService.remove(this.placa).subscribe({
      next: () => this.router.navigate(['carro']),
      error: console.log
    })
  }
}
