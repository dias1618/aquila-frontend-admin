import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanalRoutingModule } from './canal-routing.module';
import { TabelaCanaisComponent } from './components/tabela-canais/tabela-canais.component';
import { FiltroNomeComponent } from './components/filtro-nome/filtro-nome.component';
import { ButtonVoltarComponent } from './components/button-voltar/button-voltar.component';


@NgModule({
  declarations: [TabelaCanaisComponent, FiltroNomeComponent, ButtonVoltarComponent],
  imports: [
    CommonModule,
    CanalRoutingModule
  ]
})
export class CanalModule { }
