import { Injectable } from "@angular/core";
import { Canal } from "app/models/canal.entity";
import axios from "axios";
import { environment } from "environments/environment";

@Injectable()
export class CanalController{

    async insert(canal:Canal){
        await axios.post<Canal>(`${environment.baseUrl.records}/canais`, 
        canal, 
        environment.axiosConfig)
            .then(value => canal = value.data)
        return canal;
    }

    async update(canal:Canal){
        await axios.put<Canal>(`${environment.baseUrl.records}/canais`, 
        canal, 
        environment.axiosConfig)
            .then(value => canal = value.data);
        return canal;
    }

    async get():Promise<Canal[]>{
        let canais:Canal[] = [];
        await axios.get<Canal[]>(`${environment.baseUrl.records}/canais`, environment.axiosConfig)
            .then(value => canais = value.data);
        return canais;
    }

    async remove(canal:Canal):Promise<Canal>{
        await axios.delete<Canal>(`${environment.baseUrl.records}/canais/${canal.id}`, environment.axiosConfig)
            .then(value => canal = value.data);
        return canal;
    }

}