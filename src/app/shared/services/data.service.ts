import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItemModel} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>('https://api.myjson.com/bins/quyg7');
  }

}
