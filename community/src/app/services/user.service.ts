import { Injectable } from '@angular/core';

let username = localStorage.getItem('username') || '';
let guest = (username) ? false : true;

@Injectable()
export class UserService {

  isGuest() {
    return guest;
  }

  getUser() {
    return username;
  }

  login(newUsername: string) {
    username = newUsername;
    guest = false;
    localStorage.setItem('username', username);
  }

  logout() {
    username = '';
    guest = true;
    localStorage.setItem('username', '');
  }
  
  
}
