import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  issueForm: FormGroup;
  suggestions: Issue[];
  @Output() formClose = new EventEmitter();

  constructor(private builder: FormBuilder, private issueService: IssuesService) { }

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      type: ['', Validators.required]
    });

    this.issueForm.controls.title.valueChanges.subscribe((title: string) => {
      this.suggestions = this.issueService.getSuggestions(title);
    });
  }

  addIssue() {
    if (this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }

    this.issueService.createIssue(this.issueForm.value);
    this.formClose.emit();
  }

}
