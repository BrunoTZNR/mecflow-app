import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureComponent } from './manufacture.component';

describe('ManufactureComponent', () => {
  let component: ManufactureComponent;
  let fixture: ComponentFixture<ManufactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufactureComponent]
    });
    fixture = TestBed.createComponent(ManufactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});