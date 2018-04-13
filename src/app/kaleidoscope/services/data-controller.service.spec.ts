import { TestBed, inject } from '@angular/core/testing';

import { DataControllerService } from './data-controller.service';

describe('DataControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataControllerService]
    });
  });

  it('should be created', inject([DataControllerService], (service: DataControllerService) => {
    expect(service).toBeTruthy();
  }));
});
