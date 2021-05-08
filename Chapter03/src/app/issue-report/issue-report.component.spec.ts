import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueReportComponent } from './issue-report.component';

describe('IssueReportComponent', () => {
  let component: IssueReportComponent;
  let fixture: ComponentFixture<IssueReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
