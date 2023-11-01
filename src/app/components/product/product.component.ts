import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/types/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.list();
  }

  ngOnInit(): void {

  }
}
