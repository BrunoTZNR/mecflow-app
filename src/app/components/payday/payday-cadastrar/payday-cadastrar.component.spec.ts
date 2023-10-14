import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydayCadastrarComponent } from './payday-cadastrar.component';

describe('PaydayCadastrarComponent', () => {
  let component: PaydayCadastrarComponent;
  let fixture: ComponentFixture<PaydayCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaydayCadastrarComponent]
    });
    fixture = TestBed.createComponent(PaydayCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
