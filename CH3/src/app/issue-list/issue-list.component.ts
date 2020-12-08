import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[] = [];

  constructor(private issueService: IssuesService) { }

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues(): void {
    this.issues = this.issueService.getPendingIssues();
  }
}
