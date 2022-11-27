import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Livro } from "./Livro";

@Entity()
export class Critica {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    critica: string;

    @ManyToOne(type => Livro, livro => livro.criticas)
    livro: Livro;

    constructor(name: string) {
        this.critica = name;
    }

}