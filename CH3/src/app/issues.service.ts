import { Injectable } from '@angular/core';
import { issues } from '../assets/issues';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issues: Issue[] = issues;

  constructor() { }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

}
