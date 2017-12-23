import { AuthGuardService } from './auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { TopicComponent } from './../topic/topic/topic.component';
import { TopicDataService } from './../topic/topic-data.service';
import { TopicResolver } from './../topic/topic-resolver.service';
import { TopicDetailsComponent } from './../topic/topic-details/topic-details.component';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'topic', component: TopicComponent},
  { path: 'topic-details', component: TopicDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    TopicComponent,
    TopicDetailsComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    TopicDataService,
    TopicResolver
  ],
  exports: [
  ]
})
export class UserModule { }
