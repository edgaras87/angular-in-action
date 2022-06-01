import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsService } from './services/blogs.service';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ],
  providers: [
    BlogsService
  ]
})
export class BlogsModule { }
