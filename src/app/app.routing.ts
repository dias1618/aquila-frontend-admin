import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './view/layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes =[
  {
    path: 'login',
    loadChildren: () => import('./view/login/login.module').then(m=>m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./view/signup/signup.module').then(m=>m.SignupModule)
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './view/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }],
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
