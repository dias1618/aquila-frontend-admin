import { Injectable } from "@angular/core";
import { Categoria } from "app/models/categoria.entity";
import axios from "axios";
import { environment } from "environments/environment";

@Injectable()
export class CategoriaController{

    async insert(categoria:Categoria){
        await axios.post<Categoria>(`${environment.baseUrl.records}/categorias`, 
        categoria, 
        environment.axiosConfig)
            .then(value => categoria = value.data)
        return categoria;
    }

    async update(categoria:Categoria){
        await axios.put<Categoria>(`${environment.baseUrl.records}/categorias`, 
        categoria, 
        environment.axiosConfig)
            .then(value => categoria = value.data);
        return categoria;
    }

    async get():Promise<Categoria[]>{
        let categorias:Categoria[] = [];
        await axios.get<Categoria[]>(`${environment.baseUrl.records}/categorias`, environment.axiosConfig)
            .then(value => categorias = value.data);
        return categorias;
    }

}