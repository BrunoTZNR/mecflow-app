import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/types/Product.model';
import { Observable, catchError, empty, tap } from 'rxjs';
import { ProductService } from './../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  id: string;

  product$: Observable<Product>;
  // product$!: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    //pega o id da url
    this.id = this.route.snapshot.params['id'];

    this.product$ = this.productService.findById(this.id);
  }

  ngOnInit(): void {
    console.log(this.product$)
  }

  editarProduto(): void {
    this.router.navigate(['produto/' + this.id + '/editar']);
  }

  deletarProduto(): void {
    this.productService.remove(this.id)
      .subscribe({
        next: () => this.router.navigate(['produto']),
        error: console.log
      });
  }
}
