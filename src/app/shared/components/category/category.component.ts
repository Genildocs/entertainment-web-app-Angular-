import { Component } from '@angular/core';
import { data } from '../../../../data';
import { CategoryItem } from '../../../interfaces';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  isData: {} = data;

  constructor() {
    console.log(this.isData);
  }
}
