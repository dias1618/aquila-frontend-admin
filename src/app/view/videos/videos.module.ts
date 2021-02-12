import { NgModule } from '@angular/core';
import { VideosRoutingModule } from './videos-routing.module';
import { TabelaVideosComponent } from './components/tabela-videos/tabela-videos.component';
import { SharedModule } from 'app/view/shared/shared.module';
import { VideosComponent } from './videos.component';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { VideoService } from 'app/services/video.service';
import { VideoController } from 'app/controllers/video.controller';
import { VideoProvider } from 'app/providers/video.provider';
import { VideoValidator } from 'app/validators/video.validator';
import { CanalService } from 'app/services/canal.service';
import { CanalController } from 'app/controllers/canal.controller';
import { CategoriaService } from 'app/services/categoria.service';
import { CategoriaController } from 'app/controllers/categoria.controller';

let components = [
  TabelaVideosComponent, 
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
    VideoValidator,
    CanalService,
    CanalController,
    CategoriaService,
    CategoriaController
  ]
})
export class VideosModule { }
