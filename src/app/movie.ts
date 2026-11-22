export interface Movie {
    id: number;
    title: string;
    original_title: string;
    original_language: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    popularity: number;
    vote_average: number;
    vote_count: number;
    adult: boolean;
    video: boolean;
    genre_ids?: number[];
  }
  
  export interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
  
  export interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }