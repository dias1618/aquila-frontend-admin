import { CategoriaController } from "app/controllers/categoria.controller";
import { Categoria } from "app/models/categoria.entity";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoriaService{

    constructor(private _categoriaController:CategoriaController){}

    async save(categoria:Categoria):Promise<Categoria>{
        if(categoria.id == undefined || categoria.id == 0){
            return await this._categoriaController.insert(categoria);
        }
        else
            return await this._categoriaController.update(categoria);
    }

    async get():Promise<Categoria[]>{
        return await this._categoriaController.get();
    }
}