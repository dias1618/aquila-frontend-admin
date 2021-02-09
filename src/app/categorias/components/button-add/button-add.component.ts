import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaModalComponent } from '../categoria-modal/categoria-modal.component';
import { CategoriaProvider } from 'app/providers/categoria.provider';
import { Categoria } from 'app/models/categoria.entity';

@Component({
  selector: 'button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public categoriaProvider: CategoriaProvider
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
        this.categoriaProvider.categorias.push(new Categoria(result.categoria));
      }
    });
  }
}
