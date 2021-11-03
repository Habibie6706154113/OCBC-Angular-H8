import { TestBed } from '@angular/core/testing';

import { DataPaymentService } from './data-payment.service';

describe('DataPaymentService', () => {
  let service: DataPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
