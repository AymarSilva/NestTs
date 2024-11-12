import { IsEmail, IsNotEmpty } from "class-validator";

interface templatePersonal{
    id?: number,
    nome: string,
    email: string
};

export class Personal implements templatePersonal{
    id?: number;

    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    constructor(id: number, nome: string, email: string) {
        if (id) {
            this.id = id;
        };
        this.nome = nome;
        this.email = email;
    };
};