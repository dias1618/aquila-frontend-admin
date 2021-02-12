import { Component, OnInit, ViewChild } from '@angular/core';
import { TabelaVideosComponent } from './components/tabela-videos/tabela-videos.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  @ViewChild('tabelaVideos', {static: false}) tabelaVideos: TabelaVideosComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
