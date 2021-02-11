import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import {YouTubePlayerModule} from '@angular/youtube-player';


@NgModule({
  imports: [
    CommonModule,
    AdminLayoutRoutes,
    FormsModule,
    LbdModule,
    YouTubePlayerModule
  ],
  declarations: [
    HomeComponent,
  ]
})

export class AdminLayoutModule {}
