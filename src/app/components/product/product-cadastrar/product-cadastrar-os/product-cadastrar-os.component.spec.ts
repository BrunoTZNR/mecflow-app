import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCadastrarOsComponent } from './product-cadastrar-os.component';

describe('ProductCadastrarOsComponent', () => {
  let component: ProductCadastrarOsComponent;
  let fixture: ComponentFixture<ProductCadastrarOsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCadastrarOsComponent]
    });
    fixture = TestBed.createComponent(ProductCadastrarOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
