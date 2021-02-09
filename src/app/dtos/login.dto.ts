export class LoginDto{
    login:string;
    senha:string;

    constructor(data: {login:string, senha:string}){
        this.login = data && data.login;
        this.senha = data && data.senha;
    }
}