import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Forum, Thread } from '../services/data';
import { ForumsService } from '../services/forums.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  forum: Forum;
  thread?: Thread;

  constructor(private route: ActivatedRoute, private forumService: ForumsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let forum = this.route.snapshot.parent?.params['forum_alias'];
      console.log(params['thread_alias']);
      this.thread = this.forumService.thread(forum, params['thread_alias']);
    });
  }

}
