import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  posts: ScullyRoute[];

  constructor(private scullyService: ScullyRoutesService) { }

  ngOnInit(): void {
    this.scullyService.available$.subscribe(posts => {
      this.posts = posts.filter(post => post.title);
    });
  }

}
