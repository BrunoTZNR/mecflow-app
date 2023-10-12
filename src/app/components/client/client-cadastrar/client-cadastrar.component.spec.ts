import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCadastrarComponent } from './client-cadastrar.component';

describe('ClientCadastrarComponent', () => {
  let component: ClientCadastrarComponent;
  let fixture: ComponentFixture<ClientCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientCadastrarComponent]
    });
    fixture = TestBed.createComponent(ClientCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
