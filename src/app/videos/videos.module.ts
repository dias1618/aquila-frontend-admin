import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { TabelaVideosComponent } from './components/tabela-videos/tabela-videos.component';
import { FiltroDescricaoComponent } from './components/filtro-descricao/filtro-descricao.component';
import { FiltroCanalComponent } from './components/filtro-canal/filtro-canal.component';
import { FiltroCategoriaComponent } from './components/filtro-categoria/filtro-categoria.component';
import { ButtonVoltarComponent } from './components/button-voltar/button-voltar.component';
import { ButtonPesquisarComponent } from './components/button-pesquisar/button-pesquisar.component';


@NgModule({
  declarations: [TabelaVideosComponent, FiltroDescricaoComponent, FiltroCanalComponent, FiltroCategoriaComponent, ButtonVoltarComponent, ButtonPesquisarComponent],
  imports: [
    CommonModule,
    VideosRoutingModule
  ]
})
export class VideosModule { }
