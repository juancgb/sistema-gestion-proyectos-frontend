import { TestBed, inject } from '@angular/core/testing';

import { InterceptorResquestService } from './interceptor-request.service';

describe('InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptorResquestService]
    });
  });

  it('should be created', inject([InterceptorResquestService], (service: InterceptorResquestService) => {
    expect(service).toBeTruthy();
  }));
});
