import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreatepollComponent } from './components/createpoll/createpoll.component';
import { HomeComponent } from './components/home/home.component';
import { PolleventComponent } from './components/pollevent/pollevent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PolldataComponent } from './components/polldata/polldata.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from './material.module';
import { PolltypeComponent } from './components/polltype/polltype.component';
import { PollcreatedComponent } from './components/pollcreated/pollcreated.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PollidComponent } from './components/pollid/pollid.component';
import { UrlPermission } from './urlPermmision/url.permissions';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatepollComponent,
    HomeComponent,
    PolleventComponent,
    PolldataComponent,
    PolltypeComponent,
    PollcreatedComponent,
    ProfileComponent,
    PollidComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MaterialModule,
    NgxChartsModule
  ],
  providers: [AuthService,UrlPermission],
  bootstrap: [AppComponent]
})
export class AppModule { }
