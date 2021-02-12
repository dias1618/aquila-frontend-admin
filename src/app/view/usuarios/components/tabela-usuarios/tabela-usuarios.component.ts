import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'app/models/usuario.entity';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { UsuarioService } from 'app/services/usuario.service';
import { UsuarioProvider } from 'app/providers/usuario.provider';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'tabela-usuarios',
  templateUrl: './tabela-usuarios.component.html',
  styleUrls: ['./tabela-usuarios.component.scss']
})
export class TabelaUsuariosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'login', 'email'];
  dataSource:MatTableDataSource<Usuario>;
  initialSelection = [];
  allowMultiSelect = true;
  selection:SelectionModel<Usuario>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public usuarioService:UsuarioService,
    public usuarioProvider:UsuarioProvider,
    public dialog: MatDialog,
  ) { }

  async ngOnInit(){
    await this.load();
  }

  async load(){
    this.selection = new SelectionModel<Usuario>(this.allowMultiSelect, this.initialSelection);
    this.usuarioProvider.usuarios = await this.usuarioService.get();
    this.dataSource = new MatTableDataSource<Usuario>(this.usuarioProvider.usuarios);
    this.dataSource.paginator = this.paginator;
  }
}
