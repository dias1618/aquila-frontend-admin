import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanalRoutingModule } from './canal-routing.module';
import { TabelaCanaisComponent } from './components/tabela-canais/tabela-canais.component';
import { ButtonVoltarComponent } from './components/button-voltar/button-voltar.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { CanalModalComponent } from './components/canal-modal/canal-modal.component';
import { SharedModule } from 'app/shared/shared.module';
import { CanalService } from 'app/services/canal.service';
import { CanalController } from 'app/controllers/canal.controller';
import { CanalProvider } from 'app/providers/canal.provider';
import { CanalValidator } from 'app/validators/canal.validator';
import { CanalComponent } from './canal.component';

var components = [
  TabelaCanaisComponent, 
  ButtonVoltarComponent,
  ButtonAddComponent,
  CanalModalComponent,
  CanalComponent
]

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components
  ],
  imports: [
    CanalRoutingModule,
    SharedModule
  ],
  providers: [
    CanalService,
    CanalController,
    CanalProvider,
    CanalValidator
  ]
})
export class CanalModule { }
