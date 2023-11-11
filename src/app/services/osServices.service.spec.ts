import { TestBed } from '@angular/core/testing';

import { OsServicesServiceService } from './osServices.service';

describe('OsServicesServiceService', () => {
  let service: OsServicesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsServicesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
