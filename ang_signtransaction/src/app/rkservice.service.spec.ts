import { TestBed } from '@angular/core/testing';

import { RkserviceService } from './rkservice.service';

describe('RkserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RkserviceService = TestBed.get(RkserviceService);
    expect(service).toBeTruthy();
  });
});
