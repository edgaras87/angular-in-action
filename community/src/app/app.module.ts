import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { ForumsModule } from './forums/forums.module';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';

const appRouters: Routes = [
  { path: 'login', component: LoginComponent }
  //{ path: 'forums', loadChildren: () => import('./forums/forums.module').then(m => m.FormsModule) }
  //{ path: '', redirectTo: '/forums', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
