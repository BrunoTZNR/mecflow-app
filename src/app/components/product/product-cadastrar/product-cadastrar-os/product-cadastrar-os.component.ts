import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { OsProductsService } from 'src/app/services/osProducts.service';
import { ProductService } from 'src/app/services/product.service';
import { Employee } from 'src/app/types/Employee.model';
import { Product } from 'src/app/types/Product.model';

@Component({
  selector: 'app-product-cadastrar-os',
  templateUrl: './product-cadastrar-os.component.html',
  styleUrls: ['./product-cadastrar-os.component.scss']
})
export class ProductCadastrarOsComponent implements OnInit{

  id_os: string;

  form!: FormGroup;

  products$: Observable<Product[]>;
  employees$: Observable<Employee[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private opService: OsProductsService,
    private formBuilder: FormBuilder,
    private prodService: ProductService,
    private empService: EmployeeService
  ) {
    this.id_os = this.route.snapshot.params['id-os'];

    this.products$ = this.prodService.list();
    this.employees$ = this.empService.list();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id_os: [this.id_os],
      id_product: [null],
      amount: [null],
      quantity: [null],
      discount: [0],
      employee_id: [null]
    });
  }

  cadastrarProdutoOs(): void {
    this.opService.save(this.form.value).subscribe({
      next: () => this.router.navigate(['os/' + this.id_os + '/editar']),
      error: e => console.log(e.error)
    })
  }

  addPriceProduct() {
    if(this.form.value.id_product != null) {
      this.prodService.findById(this.form.value.id_product).subscribe({
        next: data => this.form.patchValue({ amount: data.price }),
        error: error => console.log(error.error)
      })
    } else {
      console.log('sem produto selecionado')
    }
  }
}
