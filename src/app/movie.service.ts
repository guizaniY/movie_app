import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Movie, MovieResponse } from './movie';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private httpClient = inject(HttpClient);
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  getMovieList(): Observable<Movie[]> {
    return this.httpClient
      .get<MovieResponse>(`${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}`)
      .pipe(map((res) => res.results));
  }

  getMovieById(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieByTitle(title: string): Observable<Movie[]> {
    return this.httpClient
      .get<MovieResponse>(
        `${this.apiUrl}/search/movie?query=${encodeURIComponent(title)}&api_key=${this.apiKey}`
      )
      .pipe(map((res) => res.results));
  }
}