import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AdminComponent } from './features/admin/admin.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Portfolio' },
  { path: 'admin', component: AdminComponent, title: 'Admin • Portfolio' },
  { path: '**', redirectTo: '' },
];

