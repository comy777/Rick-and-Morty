import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { Error404Component } from '../shared/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("../home/home.module").then(m => m.HomeModule)
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '404'
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
