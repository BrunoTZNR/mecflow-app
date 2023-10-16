import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureCadastrarOsComponent } from './manufacture-cadastrar-os.component';

describe('ManufactureCadastrarOsComponent', () => {
  let component: ManufactureCadastrarOsComponent;
  let fixture: ComponentFixture<ManufactureCadastrarOsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufactureCadastrarOsComponent]
    });
    fixture = TestBed.createComponent(ManufactureCadastrarOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
