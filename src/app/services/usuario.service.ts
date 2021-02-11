import { UsuarioController } from "app/controllers/usuario.controller";
import { Usuario } from "app/models/usuario.entity";
import { Injectable } from "@angular/core";

@Injectable()
export class UsuarioService{

    constructor(private _usuarioController:UsuarioController){}

    async save(usuario:Usuario):Promise<Usuario>{
        if(usuario.id == undefined || usuario.id == 0){
            return await this._usuarioController.insert(usuario);
        }
        else
            return await this._usuarioController.update(usuario);
    }

    async get():Promise<Usuario[]>{
        return await this._usuarioController.get();
    }

    async remove(usuario:Usuario):Promise<Usuario>{
        return await this._usuarioController.remove(usuario);
    }
}