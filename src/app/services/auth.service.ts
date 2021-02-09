import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthController } from 'app/controllers/auth.controller';
import { LoginDto } from 'app/dtos/login.dto';
import { Usuario } from 'app/models/usuario.entity';
import { SignupDto } from 'app/dtos/signup.dto';

@Injectable()
export class AuthService{

    constructor(
        private _authController:AuthController,
        private _route:Router
    ){}

    async autenticar(username:string, password:string){
        let loginDto:LoginDto = new LoginDto({login: username, senha: password});
        let usuario:Usuario = await this._authController.auth(loginDto);
        return usuario;
    }

    async signup(signupDto:SignupDto){
        let usuario:Usuario = await this._authController.signup(signupDto);
        return usuario;
    }

    deslogar() {
        this._route.navigate(['/login']);
    }

}