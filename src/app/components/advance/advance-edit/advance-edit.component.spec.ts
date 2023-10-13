import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceEditComponent } from './advance-edit.component';

describe('AdvanceEditComponent', () => {
  let component: AdvanceEditComponent;
  let fixture: ComponentFixture<AdvanceEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceEditComponent]
    });
    fixture = TestBed.createComponent(AdvanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
