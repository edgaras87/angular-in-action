import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumsService } from '../forums/services/forums.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  users: any[];

  constructor(private router: Router,
              private forumservice: ForumsService) { }

  ngOnInit(): void {
    this.users = this.forumservice.users
  }

  close() {
    this.router.navigate([{outlets: {chat: null}}]);
  }

}
