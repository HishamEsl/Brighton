import { TestBed } from '@angular/core/testing';

import { DivingService } from './diving.service';

describe('DivingService', () => {
  let service: DivingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
