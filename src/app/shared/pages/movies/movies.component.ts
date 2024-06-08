import { Component } from '@angular/core';
import { InputSearchComponent } from '../../components/input-search/input-search.component';
import { CategoryComponent } from '../../components/category/category.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [InputSearchComponent, CategoryComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {}
