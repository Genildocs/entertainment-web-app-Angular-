import { Component, Input, OnInit } from '@angular/core';
import { data } from '../../../../data';
import { CategoryItem } from '../../../interfaces';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  @Input() category: string = '';
  isData: CategoryItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filterData();
  }

  filterData() {
    try {
      const filterCategory = data.filter(
        (item) => item.category === this.category
      );
      this.isData = filterCategory;
    } catch (error) {
      console.log('Error filtering data:', error);
    }
  }

  renderImage = (category: CategoryItem) => {};
}
