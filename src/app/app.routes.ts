import { Routes } from '@angular/router';
import { MAIN_ROUTES } from './routes/main/main.routes';

export const routes: Routes = [
  // {
  //   path: 'auth',
  //   children: PUBLIC_ROUTES
  // },
  {
    path: 'main',
    children: MAIN_ROUTES,
    // canActivate: [authGuard]
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' }
];
