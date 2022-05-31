import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { ForumComponent } from './forums/forum/forum.component';
import { ForumsModule } from './forums/forums.module';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { NotFoundComponent } from './not-found/not-found.component';

const appRouters: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/forums', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule,
    ForumsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
