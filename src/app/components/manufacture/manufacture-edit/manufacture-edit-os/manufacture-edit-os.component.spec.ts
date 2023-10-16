import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureEditOsComponent } from './manufacture-edit-os.component';

describe('ManufactureEditOsComponent', () => {
  let component: ManufactureEditOsComponent;
  let fixture: ComponentFixture<ManufactureEditOsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufactureEditOsComponent]
    });
    fixture = TestBed.createComponent(ManufactureEditOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
