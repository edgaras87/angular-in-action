import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  return: string = '';

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.return = params['return'] || '/forums';
      if(!this.userService.isGuest) {
        this.goto();
      }
    });
  }

  private goto() {
    this.router.navigateByUrl(this.return);
  }


  login() {
    if(this.username && this.password) {
      // here "this" points to ngModel that is model created by login form 
      console.log("username: " + this.username);
      console.log("password: " + this.password);
      this.userService.login(this.username);
      this.go();
    }
  }

  private go() {
    this.router.navigateByUrl(this.return);
  }

}
