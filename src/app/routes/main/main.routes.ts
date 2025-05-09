import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'services', component: ServicesComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];
