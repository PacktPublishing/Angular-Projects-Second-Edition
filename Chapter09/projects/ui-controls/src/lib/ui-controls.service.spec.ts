import { TestBed } from '@angular/core/testing';

import { UiControlsService } from './ui-controls.service';

describe('UiControlsService', () => {
  let service: UiControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
