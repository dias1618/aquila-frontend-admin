import { Injectable } from "@angular/core";
import { Usuario } from "app/models/usuario.entity";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class UsuarioProvider{
    public usuarios:Usuario[];
    private dataSource = new BehaviorSubject(new Usuario({}));
    public usuarioAtual = this.dataSource.asObservable();

    constructor(){
        this.usuarios = [];
    }

    updateLista(usuario:Usuario){
        this.dataSource.next(usuario);
    }

}