import { TestBed } from '@angular/core/testing';

import { HealthAgApiService } from './health-ag-api.service';

describe('HealthAgApiService', () => {
  let service: HealthAgApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthAgApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
