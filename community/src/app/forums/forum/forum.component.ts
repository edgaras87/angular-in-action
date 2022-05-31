import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Forum } from '../services/data';
import { ForumsService } from '../services/forums.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  forum?: Forum;

  constructor(
    // ActivatedRoute - a service that contains the currently active route metadata
    // such as the current URL, query or router parameters (and their current values),
    // information about any children or parent routes, and more
    private route: ActivatedRoute,
    private forumService: ForumsService) {}

    ngOnInit(): void {

        //console.log(this.route.snapshot.params)

        this.route.params.subscribe((params: Params) => {
          
          //console.log(params['forum_alias']);
          
          // 'forum_alias' attribute is from  forumsRoutes: Routes = [ ...  { path: 'forums/:forum_alias' ...
          this.forum = this.forumService.forum(params['forum_alias']);
        });
    }

}
