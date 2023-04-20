import { TestBed } from '@angular/core/testing';

import { TerrainServiceService } from './terrain-service.service';

describe('TerrainServiceService', () => {
  let service: TerrainServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerrainServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
