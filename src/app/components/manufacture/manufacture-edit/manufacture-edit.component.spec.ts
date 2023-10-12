import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureEditComponent } from './manufacture-edit.component';

describe('ManufactureEditComponent', () => {
  let component: ManufactureEditComponent;
  let fixture: ComponentFixture<ManufactureEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufactureEditComponent]
    });
    fixture = TestBed.createComponent(ManufactureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
