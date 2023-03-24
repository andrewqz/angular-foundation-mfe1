import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    loadChildren: () => import('./modules/modules.routes').then((m) => m.MODULES_ROUTES),
  },
];
