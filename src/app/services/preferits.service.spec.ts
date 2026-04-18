import { TestBed } from '@angular/core/testing';

import { PreferitsService } from './preferits.service';

describe('PreferitsService', () => {
  let service: PreferitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
