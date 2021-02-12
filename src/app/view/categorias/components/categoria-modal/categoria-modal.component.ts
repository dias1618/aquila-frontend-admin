import { Component, OnInit, Inject } from '@angular/core';
import { Categoria } from 'app/models/categoria.entity';
import { CategoriaService } from 'app/services/categoria.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoriaValidator } from 'app/validators/categoria.validator';

@Component({
  selector: 'app-categoria-modal',
  templateUrl: './categoria-modal.component.html',
  styleUrls: ['./categoria-modal.component.scss']
})
export class CategoriaModalComponent implements OnInit {

  categoria: Categoria;

  constructor(
    private _categoriaService:CategoriaService,
    private _dialogRef: MatDialogRef<Categoria>,
    private _toastr: ToastrService,
    private _categoriaValidator:CategoriaValidator,
    @Inject(MAT_DIALOG_DATA) public data: Categoria,
  ) { }

  ngOnInit(): void {
    if(this.data)
      this.categoria = new Categoria(this.data);
    else
      this.categoria = new Categoria({});
  }

  async salvar(){
    try{
      this.validate(this.categoria);
      this.categoria = new Categoria(await this._categoriaService.save(this.categoria));
      this._toastr.success(`Categoria salva com sucesso`);
      this._dialogRef.close({categoria: this.categoria});
    }
    catch(error){
      if(error.response)
        this._toastr.error(`${error.response.data.message}`);
      else
        this._toastr.error(`${error.message}`);
    }
  }

  validate(categoria:Categoria){
    this._categoriaValidator.validate({categoria: categoria});
  }

  async remove(){
    try{
      await this._categoriaService.remove(this.categoria);
      this._dialogRef.close({categoria: this.categoria});
    }
    catch(error){
      this._toastr.error(`${error.response.data.message}`);
    }
  }
}
