import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/layout/main-layout').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home').then((m) => m.HomeComponent),
      },
      {
        path: 'project',
        loadComponent: () => import('./pages/project').then((m) => m.ProjectComponent),
      },
    ],
  },
];
