import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable()
export class ForumsService {

  private _data = Data;

  get forums() {
    return this._data;
  }

}
