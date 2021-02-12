import { Component, OnInit, ViewChild } from '@angular/core';
import { TabelaCanaisComponent } from './components/tabela-canais/tabela-canais.component';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.scss']
})
export class CanalComponent implements OnInit {

  @ViewChild('tabelaCanais', {static: false}) tabelaCanais: TabelaCanaisComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
