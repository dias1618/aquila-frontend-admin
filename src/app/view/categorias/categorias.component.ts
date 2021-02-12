import { Component, OnInit, ViewChild } from '@angular/core';
import { TabelaCategoriasComponent } from './components/tabela-categorias/tabela-categorias.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  @ViewChild('tabelaCategoria', {static: false}) tabelaCategoria: TabelaCategoriasComponent;

  constructor() { }

  ngOnInit(): void {
    
  }

}
