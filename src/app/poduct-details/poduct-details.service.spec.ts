import { TestBed } from '@angular/core/testing';

import { PoductDetailsService } from './poduct-details.service';

describe('PoductDetailsService', () => {
  let service: PoductDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoductDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
