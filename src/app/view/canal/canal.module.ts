import { NgModule } from '@angular/core';
import { CanalRoutingModule } from './canal-routing.module';
import { TabelaCanaisComponent } from './components/tabela-canais/tabela-canais.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { CanalModalComponent } from './components/canal-modal/canal-modal.component';
import { SharedModule } from 'app/view/shared/shared.module';
import { CanalService } from 'app/services/canal.service';
import { CanalController } from 'app/controllers/canal.controller';
import { CanalProvider } from 'app/providers/canal.provider';
import { CanalValidator } from 'app/validators/canal.validator';
import { CanalComponent } from './canal.component';

var components = [
  TabelaCanaisComponent, 
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
