import { Injectable } from "@angular/core";
import { Usuario } from "app/models/usuario.entity";
import axios from "axios";
import { environment } from "environments/environment";

@Injectable()
export class UsuarioController{

    async insert(usuario:Usuario){
        await axios.post<Usuario>(`${environment.baseUrl.records}/usuarios`, 
        usuario, 
        environment.axiosConfig)
            .then(value => usuario = value.data)
        return usuario;
    }

    async update(usuario:Usuario){
        await axios.put<Usuario>(`${environment.baseUrl.records}/usuarios`, 
        usuario, 
        environment.axiosConfig)
            .then(value => usuario = value.data);
        return usuario;
    }

    async get():Promise<Usuario[]>{
        let usuarios:Usuario[] = [];
        await axios.get<Usuario[]>(`${environment.baseUrl.records}/usuarios`, environment.axiosConfig)
            .then(value => usuarios = value.data);
        return usuarios;
    }

    async remove(usuario:Usuario):Promise<Usuario>{
        await axios.delete<Usuario>(`${environment.baseUrl.records}/usuarios/${usuario.id}`, environment.axiosConfig)
            .then(value => usuario = value.data);
        return usuario;
    }

}