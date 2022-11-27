import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Autor } from "./Autor";
import { Editora } from "./Editora";
import { Critica } from "./Critica";

@Entity()
export class Livro {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    isbn: string;

    @Column()
    titulo: string;

    @Column({ type: 'date' })
    dataPublicacao: Date

    @Column()
    preco: string;

    @ManyToMany(type => Autor, autor => autor.livros)
    autores: Autor[];

    @ManyToOne(type => Editora, editora => editora.livros)
    editora: Editora;

    @OneToMany(type => Critica, critica => critica.livro)
    criticas: Critica[];

    constructor(isbn: string, titulo: string, dataPublicacao: Date, preco: string, autores: Autor[]) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.dataPublicacao = dataPublicacao;
        this.preco = preco;
    }

}