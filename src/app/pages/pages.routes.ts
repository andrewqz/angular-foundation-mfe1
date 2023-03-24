import { Routes } from '@angular/router';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        loadComponent: () =>import('./home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'other',
        loadComponent: () =>import('./other/other.component').then((c) => c.OtherComponent),
      }
    ],
  },
];
