import { Validator } from './validator.interface';
import { Video } from 'app/models/video.entity';

export class VideoValidator implements Validator{
    validate(data:{video:Video}){
        this.validateTitulo(data.video);
        this.validateDescricao(data.video);
        this.validateUrl(data.video);
        this.validateCanal(data.video);
        this.validateCategoria(data.video);
    }

    private validateTitulo(video:Video){
        if(!video.titulo || video.titulo == '')
            throw new Error('Faltando titulo do video');
    }

    private validateDescricao(video:Video){
        if(!video.descricao || video.descricao == '')
            throw new Error('Faltando descrição do video');
    }

    private validateUrl(video:Video){
        if(!video.url || video.url == '')
            throw new Error('Faltando url do video');
    }

    private validateCanal(video:Video){
        if(!video.canal || video.canal == null || video.canal.id == null || video.canal.id == 0)
            throw new Error('Faltando canal do video');
    }

    private validateCategoria(video:Video){
        if(!video.categoria || video.categoria == null || video.categoria.id == null || video.categoria.id == 0)
            throw new Error('Faltando categoria do video');
    }
}