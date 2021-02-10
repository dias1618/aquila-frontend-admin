import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { TabelaVideosComponent } from './components/tabela-videos/tabela-videos.component';
import { ButtonVoltarComponent } from './components/button-voltar/button-voltar.component';
import { SharedModule } from 'app/shared/shared.module';
import { VideosComponent } from './videos.component';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { VideoService } from 'app/services/video.service';
import { VideoController } from 'app/controllers/video.controller';
import { VideoProvider } from 'app/providers/video.provider';
import { VideoValidator } from 'app/validators/video.validator';

let components = [
  TabelaVideosComponent, 
  ButtonVoltarComponent, 
  VideosComponent,
  VideoModalComponent,
  ButtonAddComponent
]

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components
  ],
  imports: [
    VideosRoutingModule,
    SharedModule
  ],
  providers: [
    VideoService,
    VideoController,
    VideoProvider,
    VideoValidator
  ]
})
export class VideosModule { }
