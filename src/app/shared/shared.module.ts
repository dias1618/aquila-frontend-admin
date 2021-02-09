import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';
import { AuthController } from 'app/controllers/auth.controller';
import { AuthService } from 'app/services/auth.service';
import { SessionService } from 'app/services/session.service';
import { AuthGuard } from 'app/guards/auth-guard';

let modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  AngularMaterialModule,
  FlexLayoutModule,
  RouterModule,
]

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [
    ...modules
  ],
  providers: [
    AuthController,
    AuthService,
    SessionService,
    AuthGuard,
  ]
})
export class SharedModule { }
