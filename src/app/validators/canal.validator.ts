import { Validator } from './validator.interface';
import { Canal } from 'app/models/canal.entity';

export class CanalValidator implements Validator{
    validate(data:{canal:Canal}){
        this.validateTitulo(data.canal);
        this.validateDescricao(data.canal);
    }

    private validateTitulo(canal:Canal){
        if(!canal.titulo || canal.titulo == '')
            throw new Error('Faltando titulo do canal');
    }

    private validateDescricao(canal:Canal){
        if(!canal.descricao || canal.descricao == '')
            throw new Error('Faltando descrição do canal');
    }
}