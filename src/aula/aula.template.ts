interface templateAulas{
    id: number,
    nome: string,
    dataInicio: Date,
    dataFim?: Date
};

export class BackBoneAula implements templateAulas{
    id: number;
    nome: string;
    dataInicio: Date;
    dataFim?: Date;

    constructor(id: number, nome: string, dataInicio: Date, dataFim: Date) {
        if (id) {
            this.id = id;
        };
        this.nome = nome;
        this.dataInicio = dataInicio;
        if (dataFim) {
            this.dataFim = dataFim;
        };
    };
};