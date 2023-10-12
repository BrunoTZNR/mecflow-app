import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureCadastrarComponent } from './manufacture-cadastrar.component';

describe('ManufactureCadastrarComponent', () => {
  let component: ManufactureCadastrarComponent;
  let fixture: ComponentFixture<ManufactureCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufactureCadastrarComponent]
    });
    fixture = TestBed.createComponent(ManufactureCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
