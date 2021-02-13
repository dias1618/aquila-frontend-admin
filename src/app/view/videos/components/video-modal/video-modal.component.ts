import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { Video } from 'app/models/video.entity';
import { VideoService } from 'app/services/video.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { VideoValidator } from 'app/validators/video.validator';
import { Canal } from 'app/models/canal.entity';
import { CanalService } from 'app/services/canal.service';
import { Categoria } from 'app/models/categoria.entity';
import { CategoriaService } from 'app/services/categoria.service';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent implements OnInit, AfterViewInit {

  @ViewChild('canalSelected', {static: false}) canalSelected:MatSelect;
  @ViewChild('categoriaSelected', {static: false}) categoriaSelected:MatSelect;

  video: Video;
  canais:Canal[];
  categorias:Categoria[];

  constructor(
    private _videoService:VideoService,
    private _dialogRef: MatDialogRef<Video>,
    private _toastr: ToastrService,
    private _videoValidator:VideoValidator,
    @Inject(MAT_DIALOG_DATA) public data: Video,
    private _canalService:CanalService,
    private _categoriaService:CategoriaService,
  ) { }

  async ngOnInit() {
    if(!this.data){
      this.video = new Video({canal: new Canal({}), categoria: new Categoria({})});
    }
    else
      this.video = new Video(this.data);
  }

  async ngAfterViewInit() {
    this.canais = await this._canalService.get();
    this.categorias = await this._categoriaService.get();
    if(this.data){
      this.canalSelected.value = this.selectCanalCorrespondente();
      this.categoriaSelected.value = this.selectCategoriaCorrespondente();
    }
  }

  selectCanalCorrespondente():Canal{
    for(let canal of this.canais){
      if(this.video.canal.id == canal.id)
        return canal;
    }

    return null;
  }

  selectCategoriaCorrespondente():Categoria{
    for(let categoria of this.categorias){
      if(this.video.categoria.id == categoria.id){
        return categoria;
      }
    }

    return null;
  }

  async salvar(){
    try{
      this.validate(this.video);
      this.video = new Video(await this._videoService.save(this.video));
      this._toastr.success(`Video salva com sucesso`);
      this._dialogRef.close({video: this.video});
    }
    catch(error){
      if(error.response)
        this._toastr.error(`${error.response.data.message}`);
      else
        this._toastr.error(`${error.message}`);
    }
  }

  validate(video:Video){
    this._videoValidator.validate({video: video});
  }

  async remove(){
    try{
      await this._videoService.remove(this.video);
      this._dialogRef.close({video: this.video});
    }
    catch(error){
      this._toastr.error(`${error.response.data.message}`);
    }
  }
}
