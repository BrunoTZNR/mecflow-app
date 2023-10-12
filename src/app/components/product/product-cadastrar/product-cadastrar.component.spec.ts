import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCadastrarComponent } from './product-cadastrar.component';

describe('ProductCadastrarComponent', () => {
  let component: ProductCadastrarComponent;
  let fixture: ComponentFixture<ProductCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCadastrarComponent]
    });
    fixture = TestBed.createComponent(ProductCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
