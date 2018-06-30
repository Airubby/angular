import { TestBed, inject } from '@angular/core/testing';

import { OtherPproductService } from './other-pproduct.service';

describe('OtherPproductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtherPproductService]
    });
  });

  it('should be created', inject([OtherPproductService], (service: OtherPproductService) => {
    expect(service).toBeTruthy();
  }));
});
