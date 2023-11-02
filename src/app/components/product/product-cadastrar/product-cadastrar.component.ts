import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-cadastrar',
  templateUrl: './product-cadastrar.component.html',
  styleUrls: ['./product-cadastrar.component.scss']
})
export class ProductCadastrarComponent implements OnInit{

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router

  ) {  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cod: [''],
      stock: [0],
      ncm: [null],
      desc: [''],
      price: [0.0]
    });
  }

  cadastrarProduto() {
    // console.log(this.form.value);
    this.productService.save(this.form.value)
      .subscribe({
        next: () => {this.router.navigate(['produto'])},
        error: console.log
      });
  }
}
