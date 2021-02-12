import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { UsernameComponent } from './components/username/username.component';
import { PasswordComponent } from './components/password/password.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { EmailComponent } from './components/email/email.component';
import { ButtonSalvarComponent } from './components/button-salvar/button-salvar.component';
import { ButtonVoltarComponent } from './components/button-voltar/button-voltar.component';
import { NameComponent } from './components/name/name.component';
import { SharedModule } from 'app/view/shared/shared.module';


var components = [
  SignupComponent,
  UsernameComponent,
  PasswordComponent,
  ConfirmPasswordComponent,
  EmailComponent,
  ButtonSalvarComponent,
  ButtonVoltarComponent,
  NameComponent
]

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    SignupRoutingModule, 
    SharedModule
  ]
})
export class SignupModule { }
