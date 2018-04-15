import { TestBed, inject } from '@angular/core/testing';
import { DocumentProviderService } from './document-provider.service';

describe('DocumentProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentProviderService]
    });
  });

  it('should be created', inject([DocumentProviderService], (service: DocumentProviderService) => {
    expect(service).toBeTruthy();
  }));
});
