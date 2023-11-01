import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProductService } from 'src/app/services/product.service';
import { Employee } from 'src/app/types/Employee.interface';

@Component({
  selector: 'app-product-cadastrar-os',
  templateUrl: './product-cadastrar-os.component.html',
  styleUrls: ['./product-cadastrar-os.component.scss']
})
export class ProductCadastrarOsComponent implements OnInit{

  employees!: Employee[];

  constructor(
    private productService: ProductService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  cadastrarProdutoOs(): void {
    //chamar api post cliente

    //voltar para a detalhe os com o id dela na url
  }
}
