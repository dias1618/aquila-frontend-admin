import { Injectable } from "@angular/core";
import { Video } from "app/models/video.entity";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class VideoProvider{
    public videos:Video[];
    private dataSource = new BehaviorSubject(new Video({}));
    public videoAtual = this.dataSource.asObservable();

    constructor(){
        this.videos = [];
    }

    updateLista(lista:Video){
        this.dataSource.next(lista);
    }

}