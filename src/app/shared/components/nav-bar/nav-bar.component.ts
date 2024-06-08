import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  images: any = [
    {
      src: 'src/assets/logo.svg',
    },
  ];

  ngOnInit(): void {
    console.log(this.images[0].src);
  }
}
