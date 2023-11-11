import { TestBed } from '@angular/core/testing';

import { OsProductsService } from './osProducts.service';

describe('OsProductsService', () => {
  let service: OsProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
