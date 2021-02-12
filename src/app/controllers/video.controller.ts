import { Injectable } from "@angular/core";
import { Video } from "app/models/video.entity";
import axios from "axios";
import { environment } from "environments/environment";

@Injectable()
export class VideoController{

    async insert(video:Video){
        await axios.post<Video>(`${environment.baseUrl.records}/videos`, 
        video, 
        environment.axiosConfig)
            .then(value => video = value.data)
        return video;
    }

    async update(video:Video){
        await axios.put<Video>(`${environment.baseUrl.records}/videos`, 
        video, 
        environment.axiosConfig)
            .then(value => video = value.data);
        return video;
    }

    async get():Promise<Video[]>{
        let videos:Video[] = [];
        await axios.get<Video[]>(`${environment.baseUrl.records}/videos`, environment.axiosConfig)
            .then(value => videos = value.data);
        return videos;
    }

    async remove(video:Video):Promise<Video>{
        await axios.delete<Video>(`${environment.baseUrl.records}/videos/${video.id}`, environment.axiosConfig)
            .then(value => video = value.data);
        return video;
    }

    async recommendation(idUsuario:number, params?:{idCanal?:number, idCategoria?:number}):Promise<Video[]>{
        let videos:Video[] = [];
        await axios.get<Video[]>(`${environment.baseUrl.recommendation}/recommendations?idUsuario=${idUsuario}${this.createQueryParams(params)}`, environment.axiosConfig)
            .then(value => videos = value.data);
        return videos;
    }

    createQueryParams(params?:{idCanal?:number, idCategoria?:number}){
        let query:string='';
        if(!params)
            return query;
        if(params.idCanal)
            query+=`&idCanal=${params.idCanal}`
        if(params.idCategoria)
            query+=`&idCategoria=${params.idCategoria}`
        return query;
    }
}