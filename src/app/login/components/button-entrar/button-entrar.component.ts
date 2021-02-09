import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { SessionService } from 'app/services/session.service';
import { Usuario } from 'app/models/usuario.entity';

@Component({
  selector: 'button-entrar',
  templateUrl: './button-entrar.component.html',
  styleUrls: ['./button-entrar.component.scss']
})
export class ButtonEntrarComponent implements OnInit {

  @Input() formGroup:FormGroup;

  constructor(
    private _authService:AuthService,
    private _sessionService:SessionService,
    private _toastr: ToastrService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }


  async entrar($event){
    if(!this.formGroup.valid){
      return;
    }
    
    try{
      let usuario:Usuario = await this._authService.autenticar(this.formGroup.value.username, this.formGroup.value.password);
      this._sessionService.setValue('usuario', JSON.stringify(usuario));
      this._router.navigate(['/']);
    }
    catch(error){
      this._toastr.error(`${error.response.data.message}`);
    }
  }

}
