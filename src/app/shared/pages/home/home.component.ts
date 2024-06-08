import { Component } from '@angular/core';
import { InputSearchComponent } from '../../components/input-search/input-search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputSearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
