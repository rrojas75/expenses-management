import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard-routing.module').then((m) => m.DashboardRoutingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'expenses',
    loadChildren: () => import('./features/expenses/expense-routing.module').then((m) => m.ExpensesRoutingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('./features/auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
