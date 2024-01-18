import { TestBed } from '@angular/core/testing';

import { AtaService } from './ata.service';

describe('AtaService', () => {
  let service: AtaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
