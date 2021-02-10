import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from 'app/models/categoria.entity';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { CategoriaProvider } from 'app/providers/categoria.provider';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaService } from 'app/services/categoria.service';
import { CategoriaModalComponent } from '../categoria-modal/categoria-modal.component';

@Component({
  selector: 'tabela-categorias',
  templateUrl: './tabela-categorias.component.html',
  styleUrls: ['./tabela-categorias.component.scss']
})
export class TabelaCategoriasComponent implements OnInit {
  displayedColumns: string[] = ['nome'];
  dataSource:MatTableDataSource<Categoria>;
  initialSelection = [];
  allowMultiSelect = true;
  selection:SelectionModel<Categoria>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public categoriaService:CategoriaService,
    public categoriaProvider:CategoriaProvider,
    public dialog: MatDialog,
  ) { }

  async ngOnInit(){
    await this.load();
  }

  async load(){
    this.selection = new SelectionModel<Categoria>(this.allowMultiSelect, this.initialSelection);
    this.categoriaProvider.categorias = await this.categoriaService.get();
    this.dataSource = new MatTableDataSource<Categoria>(this.categoriaProvider.categorias);
    this.dataSource.paginator = this.paginator;
    this.selectedRow();
  }

  selectedRow(){
    this.selection.changed.subscribe((a) =>{
        if (a.added[0]){
          this.callCategoria(new Categoria(a.added[0]));
        }
    });
  }

  callCategoria(categoria:Categoria){
    const dialogRef = this.dialog.open(CategoriaModalComponent, {
      width: '35vw',
      height: '35vh',
      panelClass: 'app-modal',
      data: categoria
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        this.load();
      }
      this.selection.clear();
    });
  }
}
