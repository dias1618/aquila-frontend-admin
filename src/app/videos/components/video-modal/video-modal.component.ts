import { Component, OnInit, Inject } from '@angular/core';
import { Video } from 'app/models/video.entity';
import { VideoService } from 'app/services/video.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { VideoValidator } from 'app/validators/video.validator';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent implements OnInit {

  video: Video;

  constructor(
    private _videoService:VideoService,
    private _dialogRef: MatDialogRef<Video>,
    private _toastr: ToastrService,
    private _videoValidator:VideoValidator,
    @Inject(MAT_DIALOG_DATA) public data: Video,
  ) { }

  ngOnInit(): void {
    if(this.data)
      this.video = new Video(this.data);
    else
      this.video = new Video({});
  }

  async salvar(){
    try{
      this.validate(this.video);
      this.video = new Video(await this._videoService.save(this.video));
      this._toastr.success(`Video salva com sucesso`);
      this._dialogRef.close({video: this.video});
    }
    catch(error){
      this._toastr.error(`${error.response.data.message}`);
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
