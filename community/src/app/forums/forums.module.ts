import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForumsComponent } from './forums/forums.component';

const forumsRoutes: Routes = [
  { path: 'forums', component: ForumsComponent}
]

@NgModule({
  declarations: [
    ForumsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(forumsRoutes)
  ]
})
export class ForumsModule { }
