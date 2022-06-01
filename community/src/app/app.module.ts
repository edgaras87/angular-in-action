import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { ForumsModule } from './forums/forums.module';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatComponent } from './chat/chat.component';

const appRouters: Routes = [
  { path: 'login', component: LoginComponent },
  // tell the router to render this component inside of the  router outlet with the name "chat"
  { path: 'users', component: ChatListComponent, outlet: 'chat' },
  { path: '', redirectTo: '/forums', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ChatListComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
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
