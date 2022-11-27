import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Livro } from "./Livro";

@Entity()
export class Autor {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Livro, livro => livro.autores)
    livros: Livro[];

    constructor(name: string) {
        this.name = name;
    }

}