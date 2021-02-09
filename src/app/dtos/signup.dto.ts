import { Usuario } from "app/models/usuario.entity";

export class SignupDto{
    _name:string;
    _username:string;
    _password:string;
    _confirmpassword:string;
    _email:string;

    constructor(data: {name?:string, username?:string, password?:string, confirmpassword?:string, email?:string}){
        this._name = data && data.name || '';
        this._username = data && data.username || '';
        this._password = data && data.password || '';
        this._confirmpassword = data && data.confirmpassword || '';
        this._email = data && data.email || '';
    }

    toUsuario():Usuario{
        let usuario:Usuario = new Usuario({});
        usuario.nome = this._name;
        usuario.senha = this._password;
        usuario.login = this._username;
        usuario.email = this._email;
        return usuario;
    }

}