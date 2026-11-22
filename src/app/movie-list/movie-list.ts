import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { MovieService } from '../movie.service';
import { SearchBar } from '../search-bar/search-bar';
import { MovieSearch } from '../movie-search/movie-search';

@Component({
  selector: 'app-movie-list',
  imports: [NgIf, NgFor, AsyncPipe, RouterLink, SearchBar, MovieSearch],
  templateUrl: './movie-list.html',
})
export class MovieList {
  private movieService = inject(MovieService);
  movies$ = this.movieService.getMovieList();
  imageUrl = environment.imageUrl;
  title = '';

  onTitleChange(title: string): void {
    this.title = title;
  }
}
