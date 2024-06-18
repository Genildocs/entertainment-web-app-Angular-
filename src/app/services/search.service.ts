import { Injectable } from '@angular/core';
import { data } from '../../data';
import { CategoryItem } from '../interfaces';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  isData: CategoryItem[] = data;

  constructor() {}
}
