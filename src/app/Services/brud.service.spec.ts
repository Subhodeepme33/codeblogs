import { TestBed } from '@angular/core/testing';

import { BrudService } from './brud.service';

describe('BrudService', () => {
  let service: BrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
