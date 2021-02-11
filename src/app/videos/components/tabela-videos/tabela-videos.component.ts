import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Video } from 'app/models/video.entity';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from '../video-modal/video-modal.component';
import { VideoService } from 'app/services/video.service';
import { VideoProvider } from 'app/providers/video.provider';

@Component({
  selector: 'tabela-videos',
  templateUrl: './tabela-videos.component.html',
  styleUrls: ['./tabela-videos.component.scss']
})
export class TabelaVideosComponent implements OnInit {
  displayedColumns: string[] = ['titulo', 'descricao'];
  dataSource:MatTableDataSource<Video>;
  initialSelection = [];
  allowMultiSelect = true;
  selection:SelectionModel<Video>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public videoService:VideoService,
    public videoProvider:VideoProvider,
    public dialog: MatDialog,
  ) { }

  async ngOnInit(){
    await this.load();
  }

  async load(){
    this.selection = new SelectionModel<Video>(this.allowMultiSelect, this.initialSelection);
    this.videoProvider.videos = await this.videoService.get();
    this.dataSource = new MatTableDataSource<Video>(this.videoProvider.videos);
    this.dataSource.paginator = this.paginator;
    this.selectedRow();
  }

  selectedRow(){
    this.selection.changed.subscribe((a) =>{
        if (a.added[0]){
          this.callVideo(new Video(a.added[0]));
        }
    });
  }

  callVideo(video:Video){
    const dialogRef = this.dialog.open(VideoModalComponent, {
      width: '35vw',
      height: '70vh',
      panelClass: 'app-modal',
      data: video
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        this.load();
      }
      this.selection.clear();
    });
  }
}
