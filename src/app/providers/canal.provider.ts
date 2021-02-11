import { Injectable } from "@angular/core";
import { Canal } from "app/models/canal.entity";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class CanalProvider{
    public canais:Canal[];
    private dataSource = new BehaviorSubject(new Canal({}));
    public canalAtual = this.dataSource.asObservable();

    constructor(){
        this.canais = [];
    }

    updateLista(canal:Canal){
        this.dataSource.next(canal);
    }

}