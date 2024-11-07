interface templatePersonal{
    id?: number,
    nome: string,
    email: string
};

export class Personal implements templatePersonal{
    id: number;
    nome: string;
    email: string;

    constructor(id: number, nome: string, email: string) {
        if (id) {
            this.id = id;
        };
        this.nome = nome;
        this.email = email;
    };
};