import { Product } from 'src/app/types/Product.interface';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  products!: Product[];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
