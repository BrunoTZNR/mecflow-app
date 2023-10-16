import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCadastrarComponent } from './payment-cadastrar.component';

describe('PaymentCadastrarComponent', () => {
  let component: PaymentCadastrarComponent;
  let fixture: ComponentFixture<PaymentCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentCadastrarComponent]
    });
    fixture = TestBed.createComponent(PaymentCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
