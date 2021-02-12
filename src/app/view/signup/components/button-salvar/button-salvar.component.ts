import { Component, OnInit, Input } from '@angular/core';
import { SignupDto } from 'app/dtos/signup.dto';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'app/services/auth.service';
import { Usuario } from 'app/models/usuario.entity';
import { SessionService } from 'app/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'button-salvar',
  templateUrl: './button-salvar.component.html',
  styleUrls: ['./button-salvar.component.scss']
})
export class ButtonSalvarComponent implements OnInit {

  @Input() formGroup;

  constructor(
    private _toastr: ToastrService,
    private _authService:AuthService,
    private _sessionService:SessionService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  async salvar($event){
    try{
      if(!this.formGroup.valid){
        throw Error('Insira todos os campos requeridos')        
      }
      let signup:SignupDto = new SignupDto(this.formGroup.value);

      if(signup._password != signup._confirmpassword){
        throw Error('As senhas não são equivalentes')
      }

      let usuario:Usuario = await this._authService.signup(signup);
      this._sessionService.setValue('usuario', JSON.stringify(usuario));
      this._router.navigate(['/']);
    
    } catch(error){
      this._toastr.error(`${error.message}`);
    }

  }

}
