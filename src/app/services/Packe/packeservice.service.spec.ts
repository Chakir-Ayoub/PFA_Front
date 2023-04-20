import { TestBed } from '@angular/core/testing';

import { PackeserviceService } from './packeservice.service';

describe('PackeserviceService', () => {
  let service: PackeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
