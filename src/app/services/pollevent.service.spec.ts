import { TestBed } from '@angular/core/testing';

import { PolleventService } from './pollevent.service';

describe('PolleventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolleventService = TestBed.get(PolleventService);
    expect(service).toBeTruthy();
  });
});
