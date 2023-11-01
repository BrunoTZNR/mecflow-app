import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit{

  id: string;

  // product$: Observable<Product>;
  product$!: Product;
  // product2!: Product;

  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.id = this.route.snapshot.params['id'];

    this.productService.findById(this.id).subscribe({
      next: data => this.add(data),
      error: console.log
    })

  }

  ngOnInit(): void {
    /*this.form = this.formBuilder.group({
      cod: [this.product$.cod],
      stock: [this.product$.stock],
      ncm: [this.product$.ncm],
      desc: [this.product$.desc],
      price: [this.product$.price]
    });*/

    console.log(this.product$)
  }

  add(prod: Product) {
    console.log(prod)

    this.product$ = prod
  }

  salvarProduto(): void {

  }
}
