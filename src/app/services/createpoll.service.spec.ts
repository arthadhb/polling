import { TestBed } from '@angular/core/testing';

import { CreatepollService } from './createpoll.service';

describe('CreatepollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatepollService = TestBed.get(CreatepollService);
    expect(service).toBeTruthy();
  });
});
