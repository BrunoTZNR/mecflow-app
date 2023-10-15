import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsCadastrarComponent } from './os-cadastrar.component';

describe('OsCadastrarComponent', () => {
  let component: OsCadastrarComponent;
  let fixture: ComponentFixture<OsCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsCadastrarComponent]
    });
    fixture = TestBed.createComponent(OsCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
