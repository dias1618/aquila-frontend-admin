import { NgModule } from '@angular/core';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { TabelaUsuariosComponent } from './components/tabela-usuarios/tabela-usuarios.component';
import { UsuarioService } from 'app/services/usuario.service';
import { UsuarioController } from 'app/controllers/usuario.controller';
import { UsuarioProvider } from 'app/providers/usuario.provider';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from 'app/shared/shared.module';

let components = [
  TabelaUsuariosComponent,
  UsuariosComponent
]

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components
  ],
  imports: [
    UsuariosRoutingModule,
    SharedModule
  ],
  providers: [
    UsuarioService,
    UsuarioController,
    UsuarioProvider,
  ]
})
export class UsuariosModule { }
