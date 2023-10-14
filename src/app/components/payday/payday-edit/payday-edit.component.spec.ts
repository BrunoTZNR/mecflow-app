import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydayEditComponent } from './payday-edit.component';

describe('PaydayEditComponent', () => {
  let component: PaydayEditComponent;
  let fixture: ComponentFixture<PaydayEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaydayEditComponent]
    });
    fixture = TestBed.createComponent(PaydayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
