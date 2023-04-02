import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment as env } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth0,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
