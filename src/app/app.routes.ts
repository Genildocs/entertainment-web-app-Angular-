import { Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { MoviesComponent } from './shared/pages/movies/movies.component';
import { TvSeriesComponent } from './shared/pages/tv-series/tv-series.component';
import { BookmarkedComponent } from './shared/pages/bookmarked/bookmarked.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'movies', title: 'Movies', component: MoviesComponent },
  { path: 'tv-series', title: 'TV Series', component: TvSeriesComponent },
  { path: 'bookmarked', title: 'Bookmarkeds', component: BookmarkedComponent },
];
