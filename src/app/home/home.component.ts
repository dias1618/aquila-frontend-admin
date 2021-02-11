import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoId;

  constructor() { }

  ngOnInit(){

    this.videoId = 'XqZsoesa55w';

    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  trocar(){
    this.videoId = 'jLlOnsIapdQ';
  }
}
