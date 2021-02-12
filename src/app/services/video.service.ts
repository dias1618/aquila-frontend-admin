import { VideoController } from "app/controllers/video.controller";
import { Video } from "app/models/video.entity";
import { Injectable } from "@angular/core";

@Injectable()
export class VideoService{

    constructor(private _videoController:VideoController){}

    async save(video:Video):Promise<Video>{
        if(video.id == undefined || video.id == 0){
            return await this._videoController.insert(video);
        }
        else
            return await this._videoController.update(video);
    }

    async get():Promise<Video[]>{
        return await this._videoController.get();
    }

    async remove(video:Video):Promise<Video>{
        return await this._videoController.remove(video);
    }

    async getRecommendation(idUsuario:number, params?:{idCanal?:number, idCategoria?:number}):Promise<Video[]>{
        return await this._videoController.recommendation(idUsuario, params);
    }
}