import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { CategoriaService } from 'app/services/categoria.service';
import { CategoriaController } from 'app/controllers/categoria.controller';
import { CanalService } from 'app/services/canal.service';
import { CanalController } from 'app/controllers/canal.controller';
import { SharedModule } from 'app/shared/shared.module';
import { VideoService } from 'app/services/video.service';
import { VideoController } from 'app/controllers/video.controller';


@NgModule({
  imports: [
    CommonModule,
    AdminLayoutRoutes,
    FormsModule,
    YouTubePlayerModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
    CategoriaService,
    CategoriaController,
    CanalService,
    CanalController,
    VideoService,
    VideoController
  ]
})

export class AdminLayoutModule {}
