import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditOsComponent } from './product-edit-os.component';

describe('ProductEditOsComponent', () => {
  let component: ProductEditOsComponent;
  let fixture: ComponentFixture<ProductEditOsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductEditOsComponent]
    });
    fixture = TestBed.createComponent(ProductEditOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
