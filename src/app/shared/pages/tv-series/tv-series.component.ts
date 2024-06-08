import { Component } from '@angular/core';
import { InputSearchComponent } from '../../components/input-search/input-search.component';

@Component({
  selector: 'app-tv-series',
  standalone: true,
  imports: [InputSearchComponent],
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.css',
})
export class TvSeriesComponent {}
