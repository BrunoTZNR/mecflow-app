import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ManufactureService } from 'src/app/services/manufacture.service';
import { Employee } from 'src/app/types/Employee.interface';
import { Manufacture } from 'src/app/types/Manufacture.interface';

@Component({
  selector: 'app-manufacture-cadastrar-os',
  templateUrl: './manufacture-cadastrar-os.component.html',
  styleUrls: ['./manufacture-cadastrar-os.component.scss']
})
export class ManufactureCadastrarOsComponent implements OnInit{

  employees!: Employee[];
  services!: Manufacture[];

  constructor(
    private employeeService: EmployeeService,
    private manufactureService: ManufactureService
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.services = this.manufactureService.getManufactures();
  }

  cadastrarServicoOs(): void {
    //chamar api post

    //voltar para os com o id recuperada pela url
  }
}
