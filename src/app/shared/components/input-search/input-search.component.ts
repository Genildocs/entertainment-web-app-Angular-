import { Component, Input, OnInit } from '@angular/core';
import { IconsModule } from '../../../icons/icons.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [IconsModule, FormsModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css',
})
export class InputSearchComponent implements OnInit {
  @Input() placeholder: string = '';

  search: string = '';

  searchResult() {
    if (this.search.trim() === '') {
      alert('Please enter something');
      return;
    }
  }

  ngOnInit(): void {}
}
