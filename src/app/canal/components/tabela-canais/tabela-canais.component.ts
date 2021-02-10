import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Canal } from 'app/models/canal.entity';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { CanalService } from 'app/services/canal.service';
import { MatDialog } from '@angular/material/dialog';
import { CanalProvider } from 'app/providers/canal.provider';
import { CanalModalComponent } from '../canal-modal/canal-modal.component';

@Component({
  selector: 'tabela-canais',
  templateUrl: './tabela-canais.component.html',
  styleUrls: ['./tabela-canais.component.scss']
})
export class TabelaCanaisComponent implements OnInit {
  displayedColumns: string[] = ['titulo', 'descricao'];
  dataSource:MatTableDataSource<Canal>;
  initialSelection = [];
  allowMultiSelect = true;
  selection:SelectionModel<Canal>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public canalService:CanalService,
    public canalProvider:CanalProvider,
    public dialog: MatDialog,
  ) { }

  async ngOnInit(){
    await this.load();
  }

  async load(){
    this.selection = new SelectionModel<Canal>(this.allowMultiSelect, this.initialSelection);
    this.canalProvider.canais = await this.canalService.get();
    this.dataSource = new MatTableDataSource<Canal>(this.canalProvider.canais);
    this.dataSource.paginator = this.paginator;
    this.selectedRow();
  }

  selectedRow(){
    this.selection.changed.subscribe((a) =>{
        if (a.added[0]){
          this.callCanal(new Canal(a.added[0]));
        }
    });
  }

  callCanal(canal:Canal){
    const dialogRef = this.dialog.open(CanalModalComponent, {
      width: '35vw',
      height: '43vh',
      panelClass: 'app-modal',
      data: canal
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        this.load();
      }
      this.selection.clear();
    });
  }
}
