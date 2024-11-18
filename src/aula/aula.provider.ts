import { DataSource, Repository } from "typeorm";
import { Aulas } from "./aula.entity";
import { Provider } from "@nestjs/common";

const repositorio: Provider<Repository<Aulas>> = {
    provide: 'AULA_REPO',
    useFactory: function(dados: DataSource) {
        const repo: Repository<Aulas> = dados.getRepository(Aulas);
        return repo;
    },
    inject: ['DADOS']
};

export const repoAulas: Provider[] = [repositorio];