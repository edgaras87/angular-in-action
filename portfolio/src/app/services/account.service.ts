import { Injectable } from '@angular/core';

const defaultBalance: number = 10000;

@Injectable()
export class AccountService {

  private _balanace: number = defaultBalance;
  private _cost: number = 0;
  private _value: number = 0;

  init() {

  }

}
