import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule }  from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SimpleValueComponent } from './simple-value/simple-value.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app-routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleValueComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
