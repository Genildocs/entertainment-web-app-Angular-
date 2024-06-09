import { Component, Input, OnInit } from '@angular/core';
import { data } from '../../../../data';
import { CategoryItem } from '../../../interfaces';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgIf],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  @Input() category: string = '';
  isData: CategoryItem[] = [];
  isSmallDevice: boolean = false;
  isMediumDevice: boolean = false;
  isLargeDevice: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeBreakpoints();
  }

  observeBreakpoints() {
    this.breakpointObserver
      .observe([
        '(max-width: 640px)',
        '(min-width: 641px) and (max-width: 768px)',
        '(min-width: 769px)',
      ])
      .subscribe((result) => {
        this.isSmallDevice = result.breakpoints['(max-width: 640px)'];
        this.isMediumDevice =
          result.breakpoints['(min-width: 641px) and (max-width: 768px)'];
        this.isLargeDevice = result.breakpoints['(min-width: 769px)'];
      });
  }

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
}
