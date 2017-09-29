import { Route, Routes } from '@angular/router';
import { SimpleValueComponent } from './simple-value/simple-value.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }
];
