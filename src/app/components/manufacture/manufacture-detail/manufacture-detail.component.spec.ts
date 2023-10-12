import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureDetailComponent } from './manufacture-detail.component';

describe('ManufactureDetailComponent', () => {
  let component: ManufactureDetailComponent;
  let fixture: ComponentFixture<ManufactureDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufactureDetailComponent]
    });
    fixture = TestBed.createComponent(ManufactureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
