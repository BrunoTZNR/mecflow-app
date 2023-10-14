import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydayComponent } from './payday.component';

describe('PaydayComponent', () => {
  let component: PaydayComponent;
  let fixture: ComponentFixture<PaydayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaydayComponent]
    });
    fixture = TestBed.createComponent(PaydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
