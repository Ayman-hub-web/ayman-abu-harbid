import { TestBed } from '@angular/core/testing';

import { FunctiosService } from './functios.service';

describe('FunctiosService', () => {
  let service: FunctiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
