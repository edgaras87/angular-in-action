import { Injectable } from '@angular/core';
import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private _data = data;

  get posts() {
    return this._data;
  }

}
