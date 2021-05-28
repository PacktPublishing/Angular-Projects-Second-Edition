import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  @Input() issue: Issue | undefined;
  @Output() formClose = new EventEmitter();
  issueForm: FormGroup | undefined;

  constructor(private builder: FormBuilder, private issueService: IssuesService) { }

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      title: [this.issue?.title, Validators.required],
      description: [this.issue?.description],
      priority: [this.issue?.priority, Validators.required]
    });
  }

  save() {
    if (this.issue) {
      this.issueService.updateIssue(this.issue.issueNo, this.issueForm?.value);
      this.formClose.emit();
    }
  }

}
