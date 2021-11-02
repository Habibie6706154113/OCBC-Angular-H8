import { TestBed } from '@angular/core/testing';

import { DataStaffService } from './data-staff.service';

describe('DataStaffService', () => {
  let service: DataStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
