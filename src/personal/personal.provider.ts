import { DataSource, Repository } from "typeorm";
import { PersonalTable } from "./personalInterface.entity";
import { Provider } from "@nestjs/common";

const repositorio: Provider<Repository<PersonalTable>> = {
    provide: 'PERSO_REPO',
    useFactory: function(dados: DataSource) {
        const repo: Repository<PersonalTable> = dados.getRepository(PersonalTable);
        return repo;
    },
    inject: ['DADOS']
};

export const repoPersonal: Provider[] = [repositorio];