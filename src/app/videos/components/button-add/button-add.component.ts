import { Component, OnInit, Input } from '@angular/core';
import { TabelaVideosComponent } from '../tabela-videos/tabela-videos.component';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from '../video-modal/video-modal.component';

@Component({
  selector: 'button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {

  @Input() tabelaVideos:TabelaVideosComponent;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  addVideo($event){
    const dialogRef = this.dialog.open(VideoModalComponent, {
      width: '35vw',
      height: '43vh',
      panelClass: 'app-modal'
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result.video){
        await this.tabelaVideos.load();
      }
    });
  }
}
