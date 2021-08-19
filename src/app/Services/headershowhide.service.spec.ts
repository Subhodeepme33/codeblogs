import { TestBed } from '@angular/core/testing';

import { HeadershowhideService } from './headershowhide.service';

describe('HeadershowhideService', () => {
  let service: HeadershowhideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadershowhideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
