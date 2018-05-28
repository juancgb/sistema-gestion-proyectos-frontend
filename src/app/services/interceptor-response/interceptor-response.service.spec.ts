import { TestBed, inject } from '@angular/core/testing';

import { InterceptorResponseService } from './interceptor-response.service';

describe('InterceptorResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptorResponseService]
    });
  });

  it('should be created', inject([InterceptorResponseService], (service: InterceptorResponseService) => {
    expect(service).toBeTruthy();
  }));
});
