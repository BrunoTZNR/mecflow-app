import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydayDetailComponent } from './payday-detail.component';

describe('PaydayDetailComponent', () => {
  let component: PaydayDetailComponent;
  let fixture: ComponentFixture<PaydayDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaydayDetailComponent]
    });
    fixture = TestBed.createComponent(PaydayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
