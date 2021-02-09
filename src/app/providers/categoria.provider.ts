import { Injectable } from "@angular/core";
import { Categoria } from "app/models/categoria.entity";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class CategoriaProvider{
    public categorias:Categoria[];
    private dataSource = new BehaviorSubject(new Categoria({}));
    public categoriaAtual = this.dataSource.asObservable();

    constructor(){
        this.categorias = [];
    }

    updateLista(lista:Categoria){
        this.dataSource.next(lista);
    }

}