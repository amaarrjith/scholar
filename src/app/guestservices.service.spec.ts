import { TestBed } from '@angular/core/testing';

import { GuestservicesService } from './guestservices.service';

describe('GuestservicesService', () => {
  let service: GuestservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
