import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaModalComponent } from '../categoria-modal/categoria-modal.component';
import { CategoriaProvider } from 'app/providers/categoria.provider';
import { Categoria } from 'app/models/categoria.entity';
import { TabelaCategoriasComponent } from '../tabela-categorias/tabela-categorias.component';

@Component({
  selector: 'button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {

  @Input() tabelaCategoria:TabelaCategoriasComponent;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  addCategoria($event){
    const dialogRef = this.dialog.open(CategoriaModalComponent, {
      width: '35vw',
      height: '35vh',
      panelClass: 'app-modal'
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result.categoria){
        await this.tabelaCategoria.load();
      }
    });
  }
}
