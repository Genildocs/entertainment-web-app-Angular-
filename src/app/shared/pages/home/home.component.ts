import { Component } from '@angular/core';
import { InputSearchComponent } from '../../components/input-search/input-search.component';
import { TrendingComponent } from '../../components/trending/trending.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputSearchComponent, TrendingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
