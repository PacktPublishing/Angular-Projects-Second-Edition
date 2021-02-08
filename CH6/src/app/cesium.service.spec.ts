import { TestBed } from '@angular/core/testing';

import { CesiumService } from './cesium.service';

describe('CesiumService', () => {
  let service: CesiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CesiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
