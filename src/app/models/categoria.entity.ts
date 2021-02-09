import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from "typeorm";

@Entity()
export class Categoria extends BaseEntity{

    constructor(data: {id?:number, nome?:string, idPlatform?:number}){
        super();
        this.id = data && data.id || 0;
        this.nome = data && data.nome || "";
        this.idPlatform = data && data.idPlatform || 0;
    }

    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar")
    nome:string;

    @Column("integer")
    idPlatform:number;

    toJson():string{
        return `{
            "id": ${this.id},
            "nome": "${this.nome}",
            "idPlatform": "${this.idPlatform}",
        }`
    }
}