import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  images: any = [
    {
      src: 'assets/icon-nav-home.svg',
      alt: 'home',
      link: '/',
    },
    {
      src: 'assets/icon-nav-movies.svg',
      alt: 'movies',
      link: 'movies',
    },
    {
      src: 'assets/icon-nav-tv-series.svg',
      alt: 'tv-series',
      link: 'tv-series',
    },
    {
      src: 'assets/icon-nav-bookmark.svg',
      alt: 'bookmark',
      link: 'bookmarked',
    },
  ];

  ngOnInit(): void {}
}
