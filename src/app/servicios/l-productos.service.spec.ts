import { TestBed } from '@angular/core/testing';

import { LProductosService } from './l-productos.service';

describe('LProductosService', () => {
  let service: LProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
