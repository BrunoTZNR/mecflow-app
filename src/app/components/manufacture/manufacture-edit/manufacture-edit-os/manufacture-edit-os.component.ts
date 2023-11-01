import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { ManufactureService } from 'src/app/services/manufacture.service';
import { OsService } from 'src/app/services/os.service';
import { Employee } from 'src/app/types/Employee.interface';
import { Manufacture } from 'src/app/types/Manufacture.interface';
import { Os } from 'src/app/types/Os.interface';

@Component({
  selector: 'app-manufacture-edit-os',
  templateUrl: './manufacture-edit-os.component.html',
  styleUrls: ['./manufacture-edit-os.component.scss']
})
export class ManufactureEditOsComponent implements OnInit{

  employees!: Employee[];
  services!: Manufacture[];

  os!: Os;

  selectedEmployee!: number;
  selectedService!: number;

  totalDiscount!: number;

  constructor(
    private employeeService: EmployeeService,
    private osService: OsService,
    private manufactureService: ManufactureService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.services = this.manufactureService.getManufactures();

    console.log(this.os);

    this.selectedEmployee = this.os.services[Number(this.route.snapshot.params['pos'])].employee.id;
    this.selectedService = this.os.services[Number(this.route.snapshot.params['pos'])].id;
    this.totalDiscount = this.os.services[Number(this.route.snapshot.params['pos'])].discount;
  }

  salvarServicoOs(): void {
    //chamar api post

    //voltar para os com o id recuperada pela url
  }
}
