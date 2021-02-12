import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'categorias', loadChildren: () => import('../../categorias/categorias.module').then(m=>m.CategoriasModule) },
    { path: 'canal', loadChildren: () => import('../../canal/canal.module').then(m=>m.CanalModule) },
    { path: 'videos', loadChildren: () => import('../../videos/videos.module').then(m=>m.VideosModule) },
    { path: 'usuarios', loadChildren: () => import('../../usuarios/usuarios.module').then(m=>m.UsuariosModule) },
    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutes { }