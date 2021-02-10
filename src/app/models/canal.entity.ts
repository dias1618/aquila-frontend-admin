import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Video } from "./video.entity";

@Entity()
export class Canal extends BaseEntity{

    constructor(data: {id?:number, idPlatform?:string, titulo?:string, descricao?:string, urlImagem?:string}){
        super();
        this.id = data && data.id || 0;
        this.idPlatform = data && data.idPlatform || "";
        this.titulo = data && data.titulo || "";
        this.descricao = data && data.descricao || "";
        this.urlImagem = data && data.urlImagem || "";
    }

    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar", {nullable: true})
    idPlatform:string;

    @Column("varchar")
    titulo:string;

    @Column("varchar", {nullable: true})
    descricao:string;

    @Column("varchar", {nullable: true})
    urlImagem:string;

    @OneToMany(type => Video, videos => videos.canal)
    videos: Video[];

    toJson():string{
        return `{
            "id": ${this.id},
            "idPlatform": ${this.idPlatform},
            "titulo": "${this.titulo}",
            "descricao": "${this.descricao}",
            "urlImagem": "${this.urlImagem}",
        }`
    }
}