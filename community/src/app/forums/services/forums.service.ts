import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable()
export class ForumsService {

  private _data = Data;

  get forums() {
    return this._data;
  }

  forum(forumAlias: string) {
    return this._data.find( row => {
      return row.alias === forumAlias;
    });
  }

}
