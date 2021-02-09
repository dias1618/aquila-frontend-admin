import { Injectable } from '@angular/core';
import axios from "axios";
import { LoginDto } from 'app/dtos/login.dto';
import { Usuario } from 'app/models/usuario.entity';
import { environment } from 'environments/environment';
import { SignupDto } from 'app/dtos/signup.dto';

@Injectable()
export class AuthController{

    async auth(loginDto:LoginDto){
        let usuario:Usuario;
        await axios.post<Usuario>(`${environment.baseUrl.auth}/auth/login`, loginDto, environment.axiosConfig)
            .then(value => usuario = value.data)
        return usuario;
    }

    async signup(signup:SignupDto){
        let usuario:Usuario;
        await axios.post<Usuario>(`${environment.baseUrl.auth}/auth/signup`, {usuario: signup.toUsuario(), usuarioCategorias: []}, environment.axiosConfig)
            .then(value => usuario = value.data)
        return usuario;
    }
}