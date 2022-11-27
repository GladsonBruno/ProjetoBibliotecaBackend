import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Livro } from "./Livro";

@Entity()
export class Editora {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Livro, livro => livro.editora)
    livros: Livro[];

    constructor(name: string) {
        this.name = name;
    }

}