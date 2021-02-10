import { Component, OnInit, Input } from '@angular/core';
import { TabelaCanaisComponent } from '../tabela-canais/tabela-canais.component';
import { MatDialog } from '@angular/material/dialog';
import { CanalModalComponent } from '../canal-modal/canal-modal.component';

@Component({
  selector: 'button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {

  @Input() tabelaCanais:TabelaCanaisComponent;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  addCanal($event){
    const dialogRef = this.dialog.open(CanalModalComponent, {
      width: '35vw',
      height: '43vh',
      panelClass: 'app-modal'
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result.canal){
        await this.tabelaCanais.load();
      }
    });
  }
}
