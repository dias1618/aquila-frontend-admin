import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UsernameComponent } from './components/username/username.component';
import { PasswordComponent } from './components/password/password.component';
import { ButtonEntrarComponent } from './components/button-entrar/button-entrar.component';
import { SharedModule } from 'app/view/shared/shared.module';
import { ButtonCadastrarComponent } from './components/button-cadastrar/button-cadastrar.component';


let components = [
  LoginComponent,
  UsernameComponent,
  PasswordComponent,
  ButtonEntrarComponent,
  ButtonCadastrarComponent,
];

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule, 
    SharedModule
  ]
})
export class LoginModule { }
