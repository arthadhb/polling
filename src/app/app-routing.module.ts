import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CreatepollComponent } from './components/createpoll/createpoll.component';
import { PolleventComponent } from './components/pollevent/pollevent.component';
import { PolldataComponent } from './components/polldata/polldata.component';
import { PolltypeComponent } from './components/polltype/polltype.component';
import { PollcreatedComponent } from './components/pollcreated/pollcreated.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PollidComponent } from './components/pollid/pollid.component';
import { UrlPermission } from './urlPermmision/url.permissions';

const appRoutes: Routes = [
  { path : '', component : LoginComponent},
	{ path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [UrlPermission]  },
  { path: 'createpoll', component: CreatepollComponent, canActivate: [UrlPermission]  },
  { path: 'pollevent', component: PolleventComponent, canActivate: [UrlPermission] },
  { path: 'polldata', component: PolldataComponent, canActivate: [UrlPermission] },
  { path: 'polltype', component: PolltypeComponent },
  {path : 'pollcreated', component: PollcreatedComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'pollid', component: PollidComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(appRoutes);