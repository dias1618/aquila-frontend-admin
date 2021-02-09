import { Validator } from './validator.interface';
import { Categoria } from 'app/models/categoria.entity';

export class CategoriaValidator implements Validator{
    validate(data:{categoria:Categoria}){
        this.validateNome(data.categoria);
    }

    private validateNome(categoria:Categoria){
        if(!categoria.nome || categoria.nome == '')
            throw new Error('Faltando nome do categoria');
    }
}