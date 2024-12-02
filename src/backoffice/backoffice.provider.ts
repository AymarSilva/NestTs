import { DataSource, Repository } from "typeorm";
import { Backoffice_registroBan } from "./backoffice.entity";
import { Provider } from "@nestjs/common";

const repositorio: Provider<Repository<Backoffice_registroBan>> = {
    provide: 'Backoffice_REPO',
    useFactory: function(dados: DataSource) {
        const repo: Repository<Backoffice_registroBan> = dados.getRepository(Backoffice_registroBan);
        return repo;
    },
    inject: ['DADOS']
};

export const repoBackoffice: Provider[] = [repositorio];