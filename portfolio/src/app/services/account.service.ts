import { Injectable } from '@angular/core';
import { Stock } from './stocks.model';

const defaultBalance: number = 10000;

@Injectable()
export class AccountService {

  private _balance: number = defaultBalance;
  private _cost: number = 0;
  private _value: number = 0;

  get balance(): number { return this._balance; }
  get cost(): number { return this._cost; }
  get value(): number { return this._value; }

  init() {

  }

  reset() {
    this._balance = defaultBalance;
    this._value = this._cost = 0;
  }

}
