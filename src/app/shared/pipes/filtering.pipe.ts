import {Pipe, PipeTransform} from '@angular/core';
import {ItemModel} from '../models/item.model';

@Pipe({name: 'filteringPipe'})
export class FilteringPipe implements PipeTransform {
  transform(value: ItemModel[], filter): ItemModel[] {
    let tempArray = [];
    if (filter.name) {
      tempArray = value.filter(item => item.name === filter.name);
    } else {
      tempArray = value;
    }
    if (filter.type) {
      tempArray = tempArray.filter(item => item.type === filter.type);
    }
    return tempArray;
  }
}
