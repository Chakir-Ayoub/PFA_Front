import { TestBed } from '@angular/core/testing';

import { AfterAuthGuardGuard } from './after-auth-guard.guard';

describe('AfterAuthGuardGuard', () => {
  let guard: AfterAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AfterAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
