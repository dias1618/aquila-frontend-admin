import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { TabelaCategoriasComponent } from './components/tabela-categorias/tabela-categorias.component';
import { ButtonVoltarComponent } from './components/button-voltar/button-voltar.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { CategoriaModalComponent } from './components/categoria-modal/categoria-modal.component';
import { SharedModule } from 'app/shared/shared.module';
import { CategoriaService } from 'app/services/categoria.service';
import { CategoriaController } from 'app/controllers/categoria.controller';
import { CategoriaProvider } from 'app/providers/categoria.provider';
import { CategoriaValidator } from 'app/validators/categoria.validator';
import { CategoriasComponent } from './categorias.component';


var components = [
  TabelaCategoriasComponent, 
  ButtonVoltarComponent, 
  ButtonAddComponent, 
  CategoriaModalComponent,
  CategoriasComponent,
]

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components
  ],
  imports: [
    CategoriasRoutingModule,
    SharedModule
  ],
  providers: [
    CategoriaService,
    CategoriaController,
    CategoriaProvider,
    CategoriaValidator
  ]
})
export class CategoriasModule { }
