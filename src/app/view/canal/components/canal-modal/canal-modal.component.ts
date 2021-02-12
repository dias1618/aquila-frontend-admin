import { Component, OnInit, Inject } from '@angular/core';
import { Canal } from 'app/models/canal.entity';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CanalService } from 'app/services/canal.service';
import { CanalValidator } from 'app/validators/canal.validator';

@Component({
  selector: 'app-canal-modal',
  templateUrl: './canal-modal.component.html',
  styleUrls: ['./canal-modal.component.scss']
})
export class CanalModalComponent implements OnInit {

  canal: Canal;

  constructor(
    private _canalService:CanalService,
    private _dialogRef: MatDialogRef<Canal>,
    private _toastr: ToastrService,
    private _canalValidator:CanalValidator,
    @Inject(MAT_DIALOG_DATA) public data: Canal,
  ) { }

  ngOnInit(): void {
    if(this.data)
      this.canal = new Canal(this.data);
    else
      this.canal = new Canal({});
  }

  async salvar(){
    try{
      this.validate(this.canal);
      this.canal = new Canal(await this._canalService.save(this.canal));
      this._toastr.success(`Canal salva com sucesso`);
      this._dialogRef.close({canal: this.canal});
    }
    catch(error){
      if(error.response)
        this._toastr.error(`${error.response.data.message}`);
      else
        this._toastr.error(`${error.message}`);
    }
  }

  validate(canal:Canal){
    this._canalValidator.validate({canal: canal});
  }

  async remove(){
    try{
      await this._canalService.remove(this.canal);
      this._dialogRef.close({canal: this.canal});
    }
    catch(error){
      this._toastr.error(`${error.response.data.message}`);
    }
  }
}
