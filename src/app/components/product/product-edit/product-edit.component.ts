import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/types/Product.model";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit{

  form!: FormGroup;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      cod: [null],
      stock: [null],
      ncm: [null],
      desc: [null],
      price: [null]
    });

    this.getData();
  }

  getData() {
    this.productService.findById(this.route.snapshot.params['id']).subscribe(data => {
      this.form.patchValue(data)
    })
  }

  voltar(): void {
    this.router.navigate([`produto/${this.route.snapshot.params['id']}`])
  }

  salvarProduto():void {
    // console.log(this.form.value)
    this.productService.update(this.form.value).subscribe({
      next: data => this.router.navigate([`produto/${data.id}`])
    });
  }
}
