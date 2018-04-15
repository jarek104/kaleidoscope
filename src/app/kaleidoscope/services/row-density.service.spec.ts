import { TestBed, inject } from '@angular/core/testing';

import { RowDensityService } from './row-density.service';

describe('RowDensityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RowDensityService]
    });
  });

  it('should be created', inject([RowDensityService], (service: RowDensityService) => {
    expect(service).toBeTruthy();
  }));
});
