import { TestBed, inject } from '@angular/core/testing';

import { DynamicColumnsService } from './dynamic-columns.service';

describe('DynamicColumnsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicColumnsService]
    });
  });

  it('should be created', inject([DynamicColumnsService], (service: DynamicColumnsService) => {
    expect(service).toBeTruthy();
  }));
});
