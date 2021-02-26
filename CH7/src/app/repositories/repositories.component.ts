import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubService } from '../github.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  repositories$: Observable<Repository[]>;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.repositories$ = this.githubService.getRepositories().pipe(
      map(repos => repos.filter(repo => repo.fork === false))
    );
  }

}
