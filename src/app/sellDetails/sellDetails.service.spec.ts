/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellDetailsService } from './sellDetails.service';

describe('Service: SellDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellDetailsService]
    });
  });

  it('should ...', inject([SellDetailsService], (service: SellDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
