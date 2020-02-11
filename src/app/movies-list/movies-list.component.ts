import { Component, OnInit } from '@angular/core';
import { WebjetMoviesService } from 'src/shared/webjet-movies-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  providers: [
    WebjetMoviesService
  ]
})
export class MoviesListComponent implements OnInit {

  title = 'Webjet Movies';
  moveData = {};

  constructor(private moviesService: WebjetMoviesService) { }

  ngOnInit() {
    this.movieList();
  }

  movieList() {
    this.moviesService.getCheapMovies().subscribe(
      res => {
        this.moveData = res;
        console.log('movies' + this.moveData);
      });

  }
}

