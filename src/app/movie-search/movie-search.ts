import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  imports: [NgIf, NgFor, AsyncPipe, RouterLink],
  templateUrl: './movie-search.html',
})
export class MovieSearch {
  private movieService = inject(MovieService);
  imageUrl = environment.imageUrl;
  movies$!: Observable<Movie[]>;

  @Input() set title(value: string) {
    this.movies$ = this.movieService.getMovieByTitle(value);
  }
}