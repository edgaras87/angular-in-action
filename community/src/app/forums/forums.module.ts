import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForumsComponent } from './forums/forums.component';
import { ForumsService } from './services/forums.service';
import { ForumComponent } from './forum/forum.component';
import { ThreadsComponent } from './threads/threads.component';
import { ThreadComponent } from './thread/thread.component';

const forumsRoutes: Routes = [
  { path: 'forums', component: ForumsComponent},
  { path: 'forums/:forum_alias', 
    component: ForumComponent,
    children: [
      { path: '', component: ThreadsComponent },
      { path: ':thread_alias', component: ThreadComponent }
    ]

  }
  
]

@NgModule({
  declarations: [
    ForumsComponent,
    ForumComponent,
    ThreadComponent,
    ThreadsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(forumsRoutes)
  ],
  providers: [
    ForumsService
  ]
})
export class ForumsModule { }
