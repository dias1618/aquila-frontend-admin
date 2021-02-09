import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'categorias', loadChildren: () => import('../../categorias/categorias.module').then(m=>m.CategoriasModule) },
    { path: 'dashboard', component: HomeComponent },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutes { }