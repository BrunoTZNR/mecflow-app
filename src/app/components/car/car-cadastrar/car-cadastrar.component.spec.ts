import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCadastrarComponent } from './car-cadastrar.component';

describe('CarCadastrarComponent', () => {
  let component: CarCadastrarComponent;
  let fixture: ComponentFixture<CarCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarCadastrarComponent]
    });
    fixture = TestBed.createComponent(CarCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
