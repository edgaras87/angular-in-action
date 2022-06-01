import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

let username = localStorage.getItem('username') || '';
let guest = (username) ? false : true;

@Injectable()
export class UserService {

constructor(private router: Router) {}

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
    // to close opend chat when logout button pressed
    this.router.navigate([{outlets: {chat: null}}]);
  }
  
  
}
