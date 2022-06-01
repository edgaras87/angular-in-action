import { Component, OnInit } from '@angular/core';
import { Forum } from '../services/data';
import { ForumsService } from '../services/forums.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {

  // Forum - is an interface form Data.ts in services !!!
  forums: Forum[];

  constructor(private forumsService: ForumsService) { }

  ngOnInit(): void {
    this.forums = this.forumsService.forums;
  }

}
