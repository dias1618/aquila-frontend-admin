import { CanalController } from "app/controllers/canal.controller";
import { Canal } from "app/models/canal.entity";
import { Injectable } from "@angular/core";

@Injectable()
export class CanalService{

    constructor(private _canalController:CanalController){}

    async save(canal:Canal):Promise<Canal>{
        if(canal.id == undefined || canal.id == 0){
            return await this._canalController.insert(canal);
        }
        else
            return await this._canalController.update(canal);
    }

    async get():Promise<Canal[]>{
        return await this._canalController.get();
    }

    async remove(canal:Canal):Promise<Canal>{
        return await this._canalController.remove(canal);
    }
}