import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ButtonVoltarComponent } from './components/button-voltar/button-voltar.component';
import { TabelaUsuariosComponent } from './components/tabela-usuarios/tabela-usuarios.component';
import { UsuarioService } from 'app/services/usuario.service';
import { UsuarioController } from 'app/controllers/usuario.controller';
import { UsuarioProvider } from 'app/providers/usuario.provider';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from 'app/shared/shared.module';

let components = [
  ButtonVoltarComponent, 
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
    CommonModule,
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
