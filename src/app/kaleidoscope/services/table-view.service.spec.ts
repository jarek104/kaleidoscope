import { TestBed, inject } from '@angular/core/testing';

import { TableViewService } from './table-view.service';

describe('TableViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableViewService]
    });
  });

  it('should be created', inject([TableViewService], (service: TableViewService) => {
    expect(service).toBeTruthy();
  }));
});
