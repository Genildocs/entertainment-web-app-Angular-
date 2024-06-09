import { Component, Input, OnInit } from '@angular/core';
import { IconsModule } from '../../../icons/icons.module';
import { FormsModule } from '@angular/forms';
import { data } from '../../../../data';
import { CategoryItem } from '../../../interfaces';
@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [IconsModule, FormsModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css',
})
export class InputSearchComponent implements OnInit {
  @Input() placeholder: string = '';
  thisResult: CategoryItem[] = [];
  search: string = '';

  searchResult() {
    if (this.search.trim() === '') return;

    const filterSeach = data.filter((item) =>
      item.title.toLowerCase().includes(this.search.toLowerCase())
    );
    this.thisResult = filterSeach;
  }

  ngOnInit(): void {}
}
