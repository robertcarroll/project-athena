import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(route, state)],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
