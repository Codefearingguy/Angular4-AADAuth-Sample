import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { Adal4Service, Adal4HTTPService } from 'adal-angular4';
import { Route, RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { AuthenticationGuard } from './guards/authentication-guard';
import * as c from './';
@NgModule({
  declarations: [
    c.AppComponent,
    c.MainComponent,
    c.HomeComponent,
    c.LoginComponent,
    c.LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutes
  ],
  providers: [Adal4Service,
    {
        provide: Adal4HTTPService,
        useFactory: Adal4HTTPService.factory,
        deps: [Http, Adal4Service]
    },
    AuthenticationGuard
  ],
  bootstrap: [c.AppComponent]
})
export class AppModule { }
