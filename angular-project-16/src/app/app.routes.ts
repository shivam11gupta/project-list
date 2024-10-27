import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { UserListComponent } from './user-list/user-list.component';
import { ResolveGuardGuard } from './app.resolve';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PreventUnsavedChangesGuard } from './app-deactive.guard';

export const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      children: [
        {
          path: '',
          component: UserListComponent, 
        },
        {
          path: 'user-list',
          component: UserListComponent,
          resolve: [ResolveGuardGuard] 
        },
        {
          path: 'user-detail',
          component: UserDetailComponent,
          canDeactivate: [PreventUnsavedChangesGuard]
        },
        {
          path: 'user-detail/:id',
          loadComponent: () => import('./user-detail/user-detail.component').then(c => c.UserDetailComponent),
          canDeactivate: [PreventUnsavedChangesGuard]
        }
      ], },
  ];
