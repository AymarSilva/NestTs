import { Aulas } from "./aula.entity";

export class CriarAula{
    nome: string;
};

export class AulaResource{
    id: number;
    nome: string;
    dataInicio: Date;
    status: string;
};

export class InicioAula{
    horas: number;
};

export function dominio(param: AulaResource){
    const aula = new Aulas();
    aula.nome = param.nome;
    return aula;
};

export function representar(entidade: Aulas): AulaResource{
    const represent = new AulaResource();
    represent.id = entidade.id;
    represent.nome = entidade.nome;
    represent.status = entidade.getStatus();
    return represent;
};