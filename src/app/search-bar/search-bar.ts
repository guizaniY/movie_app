import { Component, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  imports: [FaIconComponent],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  faSearch = faMagnifyingGlass;
  titleChange = output<string>();
  private search$ = new Subject<string>();

  constructor() {
    this.search$
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((title) => this.titleChange.emit(title));
  }

  searchMovieByTitle(title: string): void {
    this.search$.next(title.trim());
  }
}
