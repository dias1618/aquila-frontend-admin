import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Canal } from 'app/models/canal.entity';
import { Categoria } from 'app/models/categoria.entity';
import { CanalService } from 'app/services/canal.service';
import { CategoriaService } from 'app/services/categoria.service';
import { VideoService } from 'app/services/video.service';
import { Video } from 'app/models/video.entity';
import { SessionService } from 'app/services/session.service';
import { Usuario } from 'app/models/usuario.entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  usuario:Usuario;
  canais:Canal[];
  categorias:Categoria[];

  videoId;
  @ViewChild('canalSelected', {static: false}) canalSelected:MatSelect;
  @ViewChild('categoriaSelected', {static: false}) categoriaSelected:MatSelect;

  index:number;
  videos:Video[];

  constructor(
    private _canalService:CanalService,
    private _categoriaService:CategoriaService,
    private _videoService:VideoService,
    private _sessionService:SessionService,
  ) { }

  async ngOnInit(){
    this.usuario = this._sessionService.usuario;
    await this.inicializarVideos();
    this.adicionarFrame();
  }

  adicionarFrame(){
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  async inicializarVideos(){
    this.videos = await this._videoService.getRecommendation(this.usuario.id, this.getParamsRecommendation());
    this.index = 0;
    this.chamarVideo(this.index);
  }

  async ngAfterViewInit() {
    this.canais = await this._canalService.get();
    this.categorias = await this._categoriaService.get();
  }

  chamarVideo(posicao:number){
    if(this.videos.length > 0)
      this.videoId = this.videos[posicao].url.replace('https://www.youtube.com/watch?v=', '');
    else
      this.videoId = '';
  }

  addPosicao():number{
    this.index++;
    if(this.index < this.videos.length)
      return this.index;
    this.index=0;
    return this.index;
  }

  getParamsRecommendation(){
    let params:any = {};
    if(this.canalSelected && this.canalSelected.value)
      params['idCanal'] = this.canalSelected.value['id'];
    if(this.categoriaSelected && this.categoriaSelected.value)
      params['idCategoria'] = this.categoriaSelected.value['id'];
    return params;
  }
}
