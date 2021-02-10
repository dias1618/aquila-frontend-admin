import { Validator } from './validator.interface';
import { Video } from 'app/models/video.entity';

export class VideoValidator implements Validator{
    validate(data:{video:Video}){
        this.validateTitulo(data.video);
        this.validateDescricao(data.video);
    }

    private validateTitulo(video:Video){
        if(!video.titulo || video.titulo == '')
            throw new Error('Faltando titulo do video');
    }

    private validateDescricao(video:Video){
        if(!video.descricao || video.descricao == '')
            throw new Error('Faltando descrição do video');
    }
}