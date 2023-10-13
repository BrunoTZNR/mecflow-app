import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceCadastrarComponent } from './advance-cadastrar.component';

describe('AdvanceCadastrarComponent', () => {
  let component: AdvanceCadastrarComponent;
  let fixture: ComponentFixture<AdvanceCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceCadastrarComponent]
    });
    fixture = TestBed.createComponent(AdvanceCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
