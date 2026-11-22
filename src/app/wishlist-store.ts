import { Injectable, signal } from '@angular/core';
import { Movie } from './movie';

const KEY = 'movie-app-wishlist';

@Injectable({ providedIn: 'root' })
export class WishlistStore {
  private _movies = signal<Movie[]>(this.load());
  movies = this._movies.asReadonly();

  isInWishlist(id: number): boolean {
    return this._movies().some((m) => m.id === id);
  }

  toggle(movie: Movie): void {
    const current = this._movies();
    const next = this.isInWishlist(movie.id)
      ? current.filter((m) => m.id !== movie.id)
      : [...current, movie];
    this._movies.set(next);
    this.save(next);
  }

  private load(): Movie[] {
    if (typeof localStorage === 'undefined') return [];
    try {
      return JSON.parse(localStorage.getItem(KEY) ?? '[]');
    } catch {
      return [];
    }
  }

  private save(movies: Movie[]): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(KEY, JSON.stringify(movies));
    }
  }
}