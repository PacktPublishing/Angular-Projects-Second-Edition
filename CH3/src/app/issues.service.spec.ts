import { TestBed } from '@angular/core/testing';

import { IssuesService } from './issues.service';

describe('IssuesService', () => {
  let service: IssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
