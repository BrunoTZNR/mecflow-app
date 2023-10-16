import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { ManufactureService } from 'src/app/services/manufacture.service';
import { OsService } from 'src/app/services/os.service';
import { ProductService } from 'src/app/services/product.service';
import { Employee } from 'src/app/types/Employee.interface';
import { Os } from 'src/app/types/Os.interface';
import { Product } from 'src/app/types/Product.interface';

@Component({
  selector: 'app-product-edit-os',
  templateUrl: './product-edit-os.component.html',
  styleUrls: ['./product-edit-os.component.scss']
})
export class ProductEditOsComponent implements OnInit{

  os!: Os;

  products!: Product[];
  employees!: Employee[];

  selectedProd!: number;
  selectedEmployee!: number;
  qtdProds!: number;
  totalAmount!: number;
  discountAmount!: number;

  constructor(
    private employeeService: EmployeeService,
    private osService: OsService,
    private manufactureService: ManufactureService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.os = this.osService.getOs(Number(this.route.snapshot.params['id-os']) - 1);

    this.products = this.productService.getProducts();
    this.employees = this.employeeService.getEmployees();

    this.selectedProd = this.os.products[Number(this.route.snapshot.params['pos'])].id;
    this.selectedEmployee = this.os.products[Number(this.route.snapshot.params['pos'])].employee.id;
    this.qtdProds = this.os.products[Number(this.route.snapshot.params['pos'])].qtdProducts;
    this.totalAmount = this.os.products[Number(this.route.snapshot.params['pos'])].totalAmount;
    this.discountAmount = this.os.products[Number(this.route.snapshot.params['pos'])].discountAmount;
  }

  salvarProdutoOs(): void {
    //chamar api post cliente

    //voltar para a detalhe os com o id dela na url
  }
}
