import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loggedIn: boolean = false;

  constructor(private userService: UserService) {}

  get user() {
    return this.userService;
  }

  logout() {
    this.userService.logout();
  }



}
