import { Routes } from '@angular/router';
import { MovieList } from './movie-list/movie-list';
import { MovieDetail } from './movie-detail/movie-detail';
import { Wishlist } from './wishlist/wishlist';

export const routes: Routes = [
  { path: '', component: MovieList },
  { path: 'movie/:id', component: MovieDetail },
  { path: 'wishlist', component: Wishlist },
  { path: '**', redirectTo: '' },
];