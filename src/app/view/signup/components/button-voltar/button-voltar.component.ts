import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'button-voltar',
  templateUrl: './button-voltar.component.html',
  styleUrls: ['./button-voltar.component.scss']
})
export class ButtonVoltarComponent implements OnInit {

  constructor(
    private location:Location
  ) { }

  ngOnInit(): void {
  }

  async voltar($event){
    this.location.back();
  }

}
