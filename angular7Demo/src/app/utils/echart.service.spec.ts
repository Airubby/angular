import { TestBed } from '@angular/core/testing';

import { EchartService } from './echart.service';

describe('EchartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EchartService = TestBed.get(EchartService);
    expect(service).toBeTruthy();
  });
});
