import { TestBed } from '@angular/core/testing';

import { StaffservicesService } from './staffservices.service';

describe('StaffservicesService', () => {
  let service: StaffservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
