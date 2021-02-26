import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';
import { Organization } from '../organization';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  orgs$: Observable<Organization[]>;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.orgs$ = this.githubService.getOrganizations();
  }

}
