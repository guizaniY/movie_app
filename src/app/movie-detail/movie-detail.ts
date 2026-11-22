import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { map, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { WishlistStore } from '../wishlist-store';

@Component({
  selector: 'app-movie-detail',
  imports: [NgIf, AsyncPipe, DatePipe, FaIconComponent],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  wishlist = inject(WishlistStore);
  faHeart = faHeart;
  imageUrl = environment.imageUrl;

  movie$ = this.route.paramMap.pipe(
    map((params) => Number(params.get('id'))),
    switchMap((id) => this.movieService.getMovieById(id))
  );

  toggle(movie: Movie): void {
    this.wishlist.toggle(movie);
  }
}